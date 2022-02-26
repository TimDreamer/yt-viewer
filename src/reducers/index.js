import { combineReducers } from "redux";
import {
  ADD_TERM,
  SEARCH_VIDEOS,
  ADD_FAVORITE,
  CHANGE_SELECTED,
  CHANGE_PAGE,
  VIDEOS_PER_PAGE,
  MAX_SEARCH_TERMS,
  INIT_PAGE,
} from "../config";

const videoReducer = (
  state = { searchTerms: [], searchVideos: [] },
  action
) => {
  switch (action.type) {
    case ADD_TERM:
      return {
        searchTerms: [
          action.payload,
          ...state.searchTerms.slice(0, MAX_SEARCH_TERMS - 1),
        ],
        searchVideos: state.searchVideos,
      };
    case SEARCH_VIDEOS:
      return {
        searchTerms: state.searchTerms,
        searchVideos: action.payload,
      };
    default:
      return state;
  }
};

const miscReducer = (
  state = {
    favorites: [],
    selected: null,
    page: INIT_PAGE,
    video_per_page: VIDEOS_PER_PAGE,
  },
  action
) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case CHANGE_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  videos: videoReducer,
  misc: miscReducer,
});
