import * as api from "../api";

//Action creators
//Redux thunk koristimo jer radimo sa async logikom u ovom slučaju
export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReviews();
    //Redux thunk -> umjesto return action, zapravo dispatchamo akciju.
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createReview = (review) => async (dispatch) => {
  try {
    const { data } = await api.createReview(review);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
