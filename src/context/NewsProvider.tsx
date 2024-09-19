"use client"
import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "@/Reducer/NewsReducer"


export const NewsContext = createContext<any>(null)


export type InitialStateType = {
    isLoading: boolean;
    isError: boolean;
    allNews: object;
    headlines: object
}

const initialstate: InitialStateType = {
    isLoading: false,
    isError: false,
    allNews: [],
    headlines: []
}

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, initialstate)

    const getAllNews = async (url: string) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const response = await axios.get(url)
            const news = await response.data.articles
            dispatch({ type: "SET_NEWS", payload: news })
        } catch (error) {
            dispatch({ type: "SET_ERROR" })
        }
    }

    useEffect(() => {
        getAllNews(`${process.env.NEXT_PUBLIC_API_KEY}`)
    }, [])
    return (
        <NewsContext.Provider value={{ ...state }}>
            {children}
        </NewsContext.Provider>
    )
}

export function useNews() {
    const newsProviderValue = useContext(NewsContext)

    if (!newsProviderValue) {
        throw new Error("News used outside of provider")
    }

    return newsProviderValue;
}