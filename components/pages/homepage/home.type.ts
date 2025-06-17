interface HomeState {
  count: number;
  isLoading: boolean;
  FilterType: string;
  FilterYear: string;
  movieList: any[];
  page: number;
  movie: any[];
  moviePage: number;
  isLightMode: boolean;
}

export { HomeState };
