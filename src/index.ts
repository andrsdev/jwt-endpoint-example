import { config } from "config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "routes/auth";
import moviesRoute from "routes/movies";
import { errorHandler } from "utils/middlewares/errorHandlers";

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
//Parsers
app.use(express.json());
app.use(cookieParser());

//Routes
authRoute(app);
moviesRoute(app);

//Error Handlers
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
