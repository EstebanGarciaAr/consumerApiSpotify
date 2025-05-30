import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../auth/context/UserContext';
import SelectPlaylistsContext from './SelectPlayListContext' 

const SelectPlaylistsProvider = ({ children }) => {
  const { userState } = useContext(UserContext);
  const [selectPlaylists, setSelectPlaylists] = useState([]);

  useEffect(() => {
    const storedSelection = localStorage.getItem(`selectPlaylists_${userState.user?.uid}`);
    if (storedSelection) {
      setSelectPlaylists(JSON.parse(storedSelection));
    }
  }, [userState.user?.uid]);

  useEffect(() => {
    if (userState.user?.uid) {
      localStorage.setItem(`selectPlaylists_${userState.user.uid}`, JSON.stringify(selectPlaylists));
    }
  }, [selectPlaylists, userState.user?.uid]);

  const addSelectPlaylist = (playlist) => {
    if (!selectPlaylists.some(p => p.id === playlist.id)) {
      setSelectPlaylists([...selectPlaylists, playlist]);
    }
  };

  const removeSelectPlaylist = (playlistId) => {
    setSelectPlaylists(selectPlaylists.filter(p => p.id !== playlistId));
  };

  const isPlaylistSelected = (playlistId) => {
    return selectPlaylists.some(p => p.id === playlistId);
  };

  return (
    <SelectPlaylistsContext.Provider
      value={{
        selectPlaylists,
        addSelectPlaylist,
        removeSelectPlaylist,
        isPlaylistSelected,
      }}
    >
      {children}
    </SelectPlaylistsContext.Provider>
  );
};

export default SelectPlaylistsProvider;