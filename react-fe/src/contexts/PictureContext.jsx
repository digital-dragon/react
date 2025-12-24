import { createContext, useState, useContext, useEffect } from "react";

const PictureContext = createContext();

export const usePictureContext = () => useContext(PictureContext);

export const PictureProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    const addToFavorites = picture => {
        setFavorites(prev => [...prev, picture])
    }

    const removeFromFavorites = date => {
        setFavorites(prev => prev.filter(picture => picture.date !== date ));
    }

    const isFavorite = data => favorites.some(picture => data = picture.date);

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <PictureContext.Provider value={value}>
        {children}
    </PictureContext.Provider>
}