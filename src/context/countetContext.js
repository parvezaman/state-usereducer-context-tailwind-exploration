import { createContext, useContext, useReducer, useState } from "react";
import { decType, incType, initialCounterState } from "../store/counter-reducer";

const COUNTER_CONTEXT = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case incType:
            return { ...state, count: state.count + 1 }
        case decType:
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}


const CounterContextProvider = ({ children }) => {
    const [currentCount, setCurrentCount] = useState(0)
    const [currentCountstate, dispatch] = useReducer(reducer, initialCounterState)
    const providedValues = { currentCount, setCurrentCount, currentCountstate, dispatch }

    return (<COUNTER_CONTEXT.Provider value={providedValues}>
        {children}
    </COUNTER_CONTEXT.Provider>)
}

const UseCounterContext = () => useContext(COUNTER_CONTEXT)

export { CounterContextProvider, UseCounterContext }