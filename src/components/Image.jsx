export default function Image(id, className){
    return(
        <>
        <img
        src={`https://res.cloudinary.com/demmasgzp/image/upload/${id}`}
        className={className}
        alt=""
      />
        </>
    )
}