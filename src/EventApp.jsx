import { AppRouter } from "./router/AppRouter"
import { UserProvider } from "./auth/context/UserProvider"
import '@fortawesome/fontawesome-free/css/all.min.css';

export const EventApp = () => {
  
    return (
        <>
          <UserProvider>
            <AppRouter/>
          </UserProvider>
        </>
    );
}