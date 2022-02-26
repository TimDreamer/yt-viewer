import { combineReducers } from "redux";
import {
  ADD_TERM,
  SEARCH_VIDEOS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CHANGE_SELECTED,
  CHANGE_PAGE,
  VIDEOS_PER_PAGE,
  MAX_SEARCH_TERMS,
  INIT_PAGE,
  CHANGE_CURSLIDE,
} from "../config";

const videoReducer = (
  state = { searchTerms: [], searchVideos: [], favorites: [] },
  action
) => {
  switch (action.type) {
    case ADD_TERM:
      return {
        ...state,
        searchTerms: [
          action.payload,
          ...state.searchTerms.slice(0, MAX_SEARCH_TERMS - 1),
        ],
      };
    case SEARCH_VIDEOS:
      return {
        ...state,
        searchVideos: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.id.videoId !== action.payload
        ),
      };
    default:
      return state;
  }
};

const miscReducer = (
  state = {
    selected: 0,
    page: INIT_PAGE,
    video_per_page: VIDEOS_PER_PAGE,
    curSlide: 0,
  },
  action
) => {
  switch (action.type) {
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
    case CHANGE_CURSLIDE:
      return {
        ...state,
        curSlide: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  videos: videoReducer,
  misc: miscReducer,
});
