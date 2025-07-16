import { useState } from "react";
import {requestHandler} from "../lib/requestHandler"; 
import type { headersType } from "../context/headersStore";

export default function useFetch(url: string, method: string,headers: headersType, body?: string) {
    const [response,setResponse] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    async function fetchData() {
        setLoading(true);
        try {
            const response = await requestHandler(url, method,headers, body);
            setResponse(response);
        } catch (error) {
            setResponse("");
            setError(previous=>previous+"\n"+`Error fetching data: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    }
    return { response, loading,error, fetchData };
}