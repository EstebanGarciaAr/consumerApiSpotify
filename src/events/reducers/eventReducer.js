import { eventTypes } from "../types/eventTypes";

export const eventReducer = (state = {}, action = {}) => {
    switch (action.type) {

        case eventTypes.loadEvents:
            return {
                ...state,
                events: [...action.payload]
            }

        case eventTypes.saveEvent:
            console.log('reducer state: ', state)
            return {
                ...state,
                events: [...state.events, action.payload] 
            };

        case eventTypes.updateEvent:
            return {
                ...state,
                events: state.events.map( event => {
                    if (event.id === action.payload.id) {
                        return {...action.payload}
                    };
                    return event;
                })
            }


        
        case eventTypes.error:
            return {
                ...state,
                errorMessage: action.payload?.errorMessage
            }


        
    
        default:
            return state;
    }
}