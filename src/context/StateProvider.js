import React, { createContext, useContext, useReducer } from 'react'

export const stateContext = createContext()

export function StateProvider({ initialState, reducer, children }) {
	return <stateContext.Provider value={useReducer(reducer, initialState)}>{children}</stateContext.Provider>
}

export function useStateValue() {
	return useContext(stateContext)
}
