import { useCallback, useState } from "react"

 const useHttp =()=>{
    const [isLoading, setIsLoading] =useState(false);
    const [error, setError] = useState(null);
    const sendRequest= useCallback(async (requestConfig, applyData)=>{
        try{
            setIsLoading(true);
            setError(null)
            const response = await fetch(requestConfig.url,{
            method: requestConfig.method ? requestConfig.method : "GET",
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            header: requestConfig.header ? requestConfig.header : {}
            })
            if(!response.ok){
                throw new Error("Fetching failed!!!")
            }
            const data = await response.json();
            applyData(data);
            setIsLoading(false)
        }catch(err){
            setError(err.message)
        }
    })
    return {
        isLoading,
        error,
        sendRequest,
    }
 }
 export default useHttp;