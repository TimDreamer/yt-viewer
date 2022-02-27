import { combineReducers } from "redux";
import {
  ADD_TERM,
  REMOVE_TERM,
  SEARCH_VIDEOS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
  CHANGE_SELECTED,
  CHANGE_PAGE,
  VIDEOS_PER_PAGE,
  MAX_SEARCH_TERMS,
  INIT_PAGE,
  CHANGE_CURSLIDE,
  TOGGLE_DASHBOARD_MODAL,
  TOGGLE_FAVORITE_MODAL,
} from "../config";

const videoReducer = (
  state = {
    searchTerms: JSON.parse(localStorage.getItem("terms")) || [],
    searchVideos: JSON.parse(localStorage.getItem("favorites")) || [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  action
) => {
  let newTerms, newFavorites;
  switch (action.type) {
    case ADD_TERM:
      if (state.searchTerms.find((term) => term === action.payload))
        return state;

      newTerms = [
        action.payload,
        ...state.searchTerms.slice(0, MAX_SEARCH_TERMS - 1),
      ];
      localStorage.setItem("terms", JSON.stringify(newTerms));
      return {
        ...state,
        searchTerms: newTerms,
      };
    case REMOVE_TERM:
      newTerms = state.searchTerms.filter((term) => term !== action.payload);
      localStorage.setItem("terms", JSON.stringify(newTerms));
      return {
        ...state,
        searchTerms: newTerms,
      };
    case SEARCH_VIDEOS:
      return {
        ...state,
        searchVideos: action.payload,
      };
    case ADD_FAVORITE:
      newFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return {
        ...state,
        favorites: newFavorites,
      };
    case REMOVE_FAVORITE:
      newFavorites = state.favorites.filter(
        (fav) => fav.id.videoId !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return {
        ...state,
        favorites: newFavorites,
      };
    case CLEAR_FAVORITES:
      newFavorites = [];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return {
        ...state,
        favorites: newFavorites,
      };
    default:
      return state;
  }
};

const miscReducer = (
  state = {
    selected: null,
    page: INIT_PAGE,
    curSlide: 0,
    video_per_page: VIDEOS_PER_PAGE,
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

const modalReducer = (
  state = {
    showDashboard: false,
    showFavoriteModal: false,
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_DASHBOARD_MODAL:
      return {
        ...state,
        showDashboard: !state.showDashboard,
      };
    case TOGGLE_FAVORITE_MODAL:
      return {
        ...state,
        showFavoriteModal: !state.showFavoriteModal,
      };
    default:
      return state;
  }
};

export default combineReducers({
  videos: videoReducer,
  misc: miscReducer,
  modals: modalReducer,
});
