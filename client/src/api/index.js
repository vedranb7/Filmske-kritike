import axios from "axios";

const API = axios.create({ baseURL: "https://filmske-kritike.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchReviews = () => API.get("/reviews");
export const createReview = (newReview) => API.post("/reviews", newReview);
export const updateReview = (id, updatedReview) =>
  API.patch(`/reviews/${id}`, updatedReview);
export const deleteReview = (id) => API.delete(`/reviews/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
