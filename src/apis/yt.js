import axios from "axios";
import { MAX_SEARCH_RESULTS, KEY } from "../config";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: MAX_SEARCH_RESULTS,
    key: KEY,
  },
});
