type Props = {
    movieId : number;
};

const MovieCard = ({movieId}:Props) =>{
    return (
        <p>Acessar /movies/{movieId}</p>
    );
};

export default MovieCard;