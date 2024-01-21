import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)

            try{
                const res = await fetch(url)
                const json = await res.json()

                setIsPending(false)
                setData(json)
                setError(null)
            } catch (err) {
                setIsPending(false)
                setError(`Could not fetch the data ${err.message}`)
                console.log(err.message);
            }
            
        }

        fetchData()
    }, [url])

    return {data, isPending, error}
}

export default useFetch;