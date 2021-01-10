export default (reviews = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return reviews.map((review) =>
        review._id === action.payload._id ? action.payload : review
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...reviews, action.payload];
    default:
      return reviews;
  }
};
