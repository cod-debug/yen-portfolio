'use client';

import { createContext, useContext, useState } from "react";


const AppContext = createContext<any>(null);

export function AppProvider({children} : {children: React.ReactNode}) {
    const [pageTitle, setPageTitle] = useState('Default Value');

    return(
        <AppContext.Provider value={{pageTitle, setPageTitle}}>
            { children }
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}