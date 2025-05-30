import { collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { eventTypes } from "../types/eventTypes";

export const useEvent = (user, dispatch) => {

    const initializeEvents = async () => {
        const eventsRef = collection(FirebaseDB, `${user.uid}/consumerApiSpotify/events`);

        const q = query(eventsRef);

        const querySnapshot = await getDocs(q);

        const resultData = querySnapshot.docs.map((doc) =>{
            return {id: doc.id, ...doc.data()}

        })

        const uniqueEvents = Array.from(
            new Map(resultData.map(e => [e.id, e])).values()
        );

        const action = {
            type: eventTypes.loadEvents,
            payload: uniqueEvents
        }
        dispatch(action)
    }

    const fetchEvents = async () => {
        const eventsRef = collection(FirebaseDB, `${user.uid}/consumerApiSpotify/events`);

        const q = query(eventsRef);

        const querySnapshot = await getDocs(q);

        const resultData = querySnapshot.docs.map((doc) =>{
            return {id: doc.id, ...doc.data()}

        })

        return resultData;
    }

    const saveEvent = async (event) => {
        try {
            const newDoc = doc(collection(FirebaseDB,  `${user.uid}/consumerApiSpotify/events`));


            await setDoc(newDoc, event);

            event.id = newDoc.id;

            const action = {
                type: eventTypes.saveEvent,
                payload: event
            };

            dispatch(action);

            return true;
            
        } catch (error) {
            console.log(error.message) 
                const action = {
                    type: eventTypes.error,
                    payload: {
                        errorMessage: error.message
                    }
                 };

                 dispatch(action);
        }

    }

    const deleteEvent = async (eventId) => {
        try {
            const eventDocRef = doc(FirebaseDB, `${user.uid}/consumerApiSpotify/events/${eventId}`);
            await deleteDoc(eventDocRef);

            const action = {
                type: eventTypes.removeEvent,
                payload: eventId
            };

            dispatch(action);

            return true;
        } catch (error) {
            console.error("Error al eliminar evento:", error);

            const action = {
                type: eventTypes.error,
                payload: { errorMessage: error.message }
            };

            dispatch(action);

            return false;
        }
    }

    return {saveEvent, fetchEvents, initializeEvents, deleteEvent}

}