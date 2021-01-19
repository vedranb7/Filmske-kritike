import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api";

//Action creators
//Redux thunk koristimo jer radimo sa async logikom u ovom slučaju
export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReviews();
    //Redux thunk -> umjesto return action, zapravo dispatchamo akciju.
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createReview = (review) => async (dispatch) => {
  try {
    const { data } = await api.createReview(review);
    dispatch({ type: CREATE, payload: data });
    console.log(review.poster);
  } catch (error) {
    console.log(error);
  }
};

export const updateReview = (id, review) => async (dispatch) => {
  try {
    const { data } = await api.updateReview(id, review);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = (id) => async (dispatch) => {
  try {
    await api.deleteReview(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
