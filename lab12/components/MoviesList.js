import classes from "./MoviesList.module.css";
import Movie from "./Movie";
function MoviesList (props){
    // console.log(props.movies)
    return<ul className={classes["movies-list"]}>
        {props.movies.map(el=><Movie key={el.id} title={el.title} 
        releaseDate={el.releaseDate} text={el.openingText}/>)}
    </ul>
    
}
export default MoviesList;