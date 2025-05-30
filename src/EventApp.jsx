import { AppRouter } from "./router/AppRouter"
import { UserProvider } from "./auth/context/UserProvider"
import { EventProvider } from "./events/context/EventProvider";
import SelectPlaylistsProvider from "./context/SelectPlayListProvider";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const EventApp = () => {
  
    return (
        <>
          <UserProvider>
            <EventProvider>
              <SelectPlaylistsProvider>
                <AppRouter/>
              </SelectPlaylistsProvider>
            </EventProvider>
          </UserProvider>
        </>
    );
}