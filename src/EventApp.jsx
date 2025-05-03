import { AppRouter } from "./router/AppRouter"
import { UserProvider } from "./auth/context/UserProvider"

export const EventApp = () => {
  
    return (
        <>
          <UserProvider>
            <AppRouter/>
          </UserProvider>
        </>
    );
}