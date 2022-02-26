import yt from "../apis/yt";
import {
  ADD_TERM,
  SEARCH_VIDEOS,
  ADD_FAVORITE,
  CHANGE_SELECTED,
  CHANGE_PAGE,
} from "../config";

export const addTerm = (term) => {
  return {
    type: ADD_TERM,
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

export const changePage = (toPage) => {
  return {
    type: CHANGE_PAGE,
    payload: toPage,
  };
};

export const changeSelected = (idx) => {
  return {
    type: CHANGE_SELECTED,
    payload: idx,
  };
};
