
import { useState, useEffect } from 'react';
const useFetch=<T>(fetchFunction: () => Promise<T>) => {

   const  [data,setData] = useState<T | null>(null);
   const [loading,setLoading] = useState(false);
   const [error,setError] = useState<Error | null>(null);

   const fetchData = async () => { 
    try {
        
    } catch (err) {

        setError( instanceof Error? err :new Error("an error occurred")
        
    }
   }
}