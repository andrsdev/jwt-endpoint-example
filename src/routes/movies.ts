import express, { Express } from "express";
import passport from "passport";
import MoviesService from "services/movies";
import jwtStrategy from "utils/auth/jwtAuthStrategy";
// import scopesValidationHandler from "utils/middlewares/scopesValidationHandler";

function moviesRoute(app: Express) {
  const router = express.Router();
  const moviesService = new MoviesService();
  app.use("/api/movies", router);

  router.get(
    "/",
    passport.authenticate(jwtStrategy, { session: false }),
    // scopesValidationHandler(["read:movies"]),
    async function (_req, res, next) {
      try {
        const movies = await moviesService.getMovies();
        res.status(200).json({
          data: movies,
          message: "movies listed",
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

export default moviesRoute;
