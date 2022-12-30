import { useCounter, useFetch } from "../Hooks"
import { LoadingQuote, Quote } from "../03-ejemplo"


export const Layout = () => {
    const {Count,incrementar}=useCounter()
    const {data,hasError,isLoading}= useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${Count}`)

    const { quote, author } = !!data && data[0]
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author}/>
            }
            <button onClick={incrementar} disabled={isLoading} className="btn btn-primary">Next quote</button>
        </>
    )
}