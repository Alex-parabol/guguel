import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const BaseUrl = 'https://google-search3.p.rapidapi.com/api/v1' //podemos quitar /google-search e instaurar la busqueda nuestra más adelante.

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState('dog');


    //type of results being video, news, search...

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${BaseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Key': '61ec8ff567msh8628137f983d9efp127d4bjsnfaf503f50cc3',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });
        const data = await response.json()
        console.log(data)

        setResults(data);
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ results, searchTerm, isLoading, getResults }}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = () => useContext(ResultContext)