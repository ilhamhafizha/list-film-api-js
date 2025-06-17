interface MovieItemProps {
  _id: string;
  id: string;
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
      __typename: string;
    };
    __typename: string;
  };
  titleType: {
    displayableProperty: {
      value: {
        plainText: string;
        __typename: string;
      };
      __typename: string;
    };
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    categories: {
      value: string;
      __typename: string;
    }[];
    canHaveEpisodes: boolean;
    __typename: string;
  };
  titleText: {
    text: string;
    __typename: string;
  };
  originalTitleText: {
    text: string;
    __typename: string;
  };
  releaseYear: {
    year: number;
    endYear: number | null;
    __typename: string;
  };
  releaseDate: {
    day: number;
    month: number;
    year: number;
    __typename: string;
  };
}

export default MovieItemProps;
