import { Movie } from "models/movie";
import { movies } from "utils/mocks/movies";

class MoviesService {
  getMovies(): Movie[] {
    return movies;
  }
}

export default MoviesService;
