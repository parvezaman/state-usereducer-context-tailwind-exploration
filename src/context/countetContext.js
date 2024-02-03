import { createContext, useContext, useReducer, useState } from "react";
import { decType, incType, initialCounterState } from "../store/counter-reducer";

const COUNTER_CONTEXT = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case incType:
            if (state.count >= 0) {
                return { ...state, count: state.count + 1 }
            }
            else {
                return state
            }
        case decType:
            if (state.count > 0) {
                return { ...state, count: state.count - 1 }
            }
            else {
                return state
            }
        default:
            return state
    }
}


const CounterContextProvider = ({ children }) => {
    const [currentCount, setCurrentCount] = useState(0)
    const [currentCountState, dispatch] = useReducer(reducer, initialCounterState)

    const providedValues = { currentCount, setCurrentCount, currentCountState, dispatch }

    return (<COUNTER_CONTEXT.Provider value={providedValues}>
        {children}
    </COUNTER_CONTEXT.Provider>)
}

const UseCounterContext = () => useContext(COUNTER_CONTEXT)

export { CounterContextProvider, UseCounterContext }