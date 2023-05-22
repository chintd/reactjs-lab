import { useState } from "react"
import classes from "./AddMovie.module.css"

function AddMovie (props){
    const[tilteInput,setTitleInput] = useState("");
    const[openingText,setOpeningText] = useState("");
    const[releaseDate,setrReleaseDate] = useState("")
    function titleHandler(e){
        setTitleInput(e.target.value)
    }
    function textHandler(e){
        setOpeningText(e.target.value)
    }
    function releaseDateHandler(e){
        setrReleaseDate(e.target.value)
    }
    function submitHandler(e){
        e.preventDefault();
        if(tilteInput.trim().length >0 && openingText.trim().length >0 && releaseDate.trim().length >0){

            const newMovie ={
                id: Math.random().toString(),
                title: tilteInput,
                openingText: openingText,
                releaseDate: releaseDate
            }
            props.onAddMovie(newMovie);
        }
        setTitleInput("");
        setOpeningText("");
        setrReleaseDate("");
    }
    return <form onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={titleHandler}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="openingText">Opening Text</label>
            <textarea onChange={textHandler}></textarea>
        </div>
        <div className={classes.control}>
            <label htmlFor="releaseDate">Release Date</label>
            <input type="text" id="releaseDate" onChange={releaseDateHandler}></input>

        </div>
        <div className={classes.control}>
            <button type="submit">Add Movie</button>
        </div>
        </form>
    
}
export default AddMovie;