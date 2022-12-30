import { useCounter } from "../Hooks/useCounter"
import { useFetch } from "../Hooks/useFetch"

export const MultipleCustomHooks = () => {
    const {Count,incrementar}=useCounter()
    const {data,hasError,isLoading}= useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${Count}`)
    console.log({data,hasError,isLoading});
    //console.log(numero)
    const { quote, author } = !!data && data[0]
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading 
                ?(
                    <div className="alert alert-info text-center">
                    Loading...
                    </div>
                ):(
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }
            <button onClick={incrementar} disabled={isLoading} className="btn btn-primary">Next quote</button>
        </>
    )
}
