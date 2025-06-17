import MovieItemProps from "../../container/MovieItem/item.type";

interface movieRate {
  averageRating: number;
  numVotes: number;
}

interface DetailProps {
  selectedItem?: MovieItemProps | null;
  isLoading: boolean;
  movieRate?: movieRate | null;
  isLightMode: boolean;
}
export default DetailProps;
