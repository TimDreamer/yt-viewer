////////////////////////////////////////////
// youtube api
// Only work for https://yt-viewer-app.netlify.app/.
// If you want to change the domain, please go to https://console.cloud.google.com/apis/credentials and do some change.
export const KEY = process.env.REACT_APP_KEY
export const MAX_SEARCH_RESULTS = 50

////////////////////////////////////////////
// store initState
export const VIDEOS_PER_PAGE = 5
export const MAX_SEARCH_TERMS = 5
export const INIT_PAGE = 1
////////////////////////////////////////////
// action type
export const ADD_TERM = 'ADD_TERM'
export const REMOVE_TERM = 'REMOVE_TERM'
export const SEARCH_VIDEOS = 'SEARCH_VIDEOS'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES'
export const CHANGE_SELECTED = 'CHANGE_SELECTED'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const CHANGE_CURSLIDE = 'CHANGE_CURSLIDE'
export const TOGGLE_DASHBOARD_MODAL = 'TOGGLE_DASHBOARD_MODAL'
export const TOGGLE_FAVORITE_MODAL = 'TOGGLE_FAVORITE_MODAL'
