import { createContext, useState, ReactNode, useContext } from 'react'

type contextType = {
    zoomImage: string;
    setZoomImage: (image: string) => void;
}

const GlobalContext = createContext<contextType | undefined>(undefined)

export function GlobalContextProvider({ children }: { children: ReactNode }) {
    const [zoomImage, setZoomImage] = useState<string>('')

    return (
        <GlobalContext.Provider value={{ zoomImage, setZoomImage }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    const context = useContext(GlobalContext)
    
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider')
    }
    
    return context
}