import yt from "../apis/yt";
import {
  ADD_TERM,
  REMOVE_TERM,
  SEARCH_VIDEOS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
  CHANGE_SELECTED,
  CHANGE_PAGE,
  CHANGE_CURSLIDE,
  TOGGLE_DASHBOARD_MODAL,
  TOGGLE_FAVORITE_MODAL,
} from "../config";

export const addTerm = (term) => {
  return {
    type: ADD_TERM,
    payload: term,
  };
};

export const removeTerm = (term) => {
  return {
    type: REMOVE_TERM,
    payload: term,
  };
};

export const searchVideos = (term) => async (dispatch) => {
  const res = await yt.get("/search", {
    params: {
      q: term,
    },
  });
  dispatch({
    type: SEARCH_VIDEOS,
    payload: res.data.items,
  });
};

export const addFavorite = (idx) => {
  return {
    type: ADD_FAVORITE,
    payload: idx,
  };
};

export const removeFavorite = (videoId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: videoId,
  };
};

export const clearFavorites = () => {
  return {
    type: CLEAR_FAVORITES,
  };
};

export const changePage = (toPage) => {
  return {
    type: CHANGE_PAGE,
    payload: toPage,
  };
};

export const changeSelected = (video) => {
  return {
    type: CHANGE_SELECTED,
    payload: video,
  };
};

export const changeCurSlide = (toSlide) => {
  console.log("newslide", toSlide);
  return {
    type: CHANGE_CURSLIDE,
    payload: toSlide,
  };
};

export const toggleDashboardModal = () => {
  return {
    type: TOGGLE_DASHBOARD_MODAL,
  };
};

export const toggleFavoriteModal = () => {
  console.log("yoyo");
  return {
    type: TOGGLE_FAVORITE_MODAL,
  };
};
