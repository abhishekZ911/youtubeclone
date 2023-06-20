import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [isPending, setIsPending] = useState(true);
    const [content, setContent] = useState();

        useEffect(() => {

            const abortCont = new AbortController();

            (async () => {
                try{
                let response = await fetch(url, {signal: abortCont.signal});
                let datas = await response.json();
                setContent(datas);
                setIsPending(false);
                }catch(e){

                }
            })();
            
            return () => abortCont.abort();

        }, [url]);

        
        return {isPending, content};
    
        
}

export default useFetch;