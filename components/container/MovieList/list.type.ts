import MovieItem from "../MovieItem/item.type";

interface MovieListProps {
  movieItems: MovieItem[];
  loadMoreMovie: () => void;
  isLoading: boolean;
}

export default MovieListProps;
