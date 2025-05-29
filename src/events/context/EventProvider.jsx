import { useContext, useReducer } from "react";
import { eventReducer } from "../reducers/eventReducer";
import { UserContext } from '../../auth/context/UserContext';
import { useEvent } from "../hooks/useEvent";
import { EventContext } from "./EventContext";


const initialState = {
    events: [],
    errorMessage: null,
};

const init = () => {
    return{
        events: [],
        errorMessage: null,
    }
}

export const EventProvider = ({children}) => {
    const [eventState, dispatch] = useReducer(eventReducer, initialState, init);

    const {userState: {user} } = useContext(UserContext);

    const { saveEvent, fetchEvents, initializeEvents } = useEvent(user, dispatch);

    

    return (
        <EventContext.Provider value={{ eventState, saveEvent, fetchEvents, initializeEvents}}>
            {children}
        </EventContext.Provider>
    )
};