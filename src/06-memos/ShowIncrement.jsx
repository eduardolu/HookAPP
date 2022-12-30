
export const ShowIncrement = ({incrementa}) => {
  return (
    <button
        className="btn btn-primary"
        onClick={()=>{
            incrementa(5);
        }}
    >incremento</button>
  )
}
