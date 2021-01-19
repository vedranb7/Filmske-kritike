import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (reviews = [], action) => {
  switch (action.type) {
    case DELETE:
      return reviews.filter((review) => review._id !== action.payload);
    case UPDATE:
      return reviews.map((review) =>
        review._id === action.payload._id ? action.payload : review
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...reviews, action.payload];
    default:
      return reviews;
  }
};
