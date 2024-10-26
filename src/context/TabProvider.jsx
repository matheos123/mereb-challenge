import React, { createContext, useReducer, useContext } from 'react';

const TabContext = createContext();

const tabReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_TAB':
            return { ...state, activeTab: action.payload };//to set currently active tab.
        case 'CACHE_TEXT':
            return { ...state, textCache: { ...state.textCache, ...action.payload } };//to cache fetched text for each tab to avoid re-fetching it.
        default:
            return state;
    }
};

export const TabProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tabReducer, { activeTab: 1, textCache: {} });

    const setActiveTab = (tabIndex) => dispatch({ type: 'SET_ACTIVE_TAB', payload: tabIndex });

    const cacheText = (tabIndex, text) =>
        dispatch({ type: 'CACHE_TEXT', payload: { [tabIndex]: text } });

    return (
        <TabContext.Provider value={{ state, setActiveTab, cacheText }}>
            {children}
        </TabContext.Provider>
    );
};

export const useTabContext = () => useContext(TabContext);
