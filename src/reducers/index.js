import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "White America", duration: "5:02" },
    { title: "Welcome to Hell", duration: "4:34" },
    { title: "The Plan", duration: "4:49" },
    { title: "God's Plan", duration: "3:22" },
    { title: "DNA", duration: "4:02" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
