import { useEffect, useState } from 'react'


const useFetch = (url, updateFlag) => {
    const [data, setData] = useState(null)

    const [isLoading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {
        // console.log("useEf run");

        const abortCont = new AbortController()

        

        setTimeout(()=>{

            fetch(url, {signal: abortCont.signal}).then((res) => {
                if(res.ok !== true){
                    throw Error('Could not fetch the data from this resourse')
                }
                return res.json()
            }).then((data) => {
                // console.log(data);
                setData(data)
                setLoading(false)
                setError(null)
            }).catch((err)=>{
                if(err.name === "AbortError") {
                    // console.log(' fetch aborted');
                } else {
                    setError(err.message)
                    setLoading(false)
                }
                
            })
            }, 5000)

            return () => {
                // console.log('cleanUp');
                abortCont.abort()
            }
    }, [updateFlag])

    return {data, isLoading, error}
}

export default useFetch