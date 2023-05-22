
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null)
 
  const fetchMovieHandler= useCallback(async ()=>{
    try{
      setError(null);
      setLoading(true)
      const response = await fetch("https://movies-database-d38c0-default-rtdb.firebaseio.com/movies.json");
      if(!response.ok){
        throw new Error("something wrong!")
      }
      const data = await response.json();
      const loadedData =[];
      for(const key in data){
        loadedData.push({
          id: key,
          title : data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      };
    setMovies(loadedData);
    setLoading(false)
    }catch(err){
      setError(err)
    }
  },[])
  useEffect(()=>{
    fetchMovieHandler()
  },[fetchMovieHandler]);

  async function addMovieHandler(enteredMovie){
   const response = await fetch("https://movies-database-d38c0-default-rtdb.firebaseio.com/movies.json", {
      method: 'POST',
      body : JSON.stringify(enteredMovie),
      headers: {
        "content-Type": "application/json"
      }
    })
    if(!response.ok){
      throw new Error("something wrong!")
    }
    const data = await response.json();
    console.log(data)
  }
  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
     
      <section>
        <button className="button" type='button' onClick={fetchMovieHandler}>Fetch Movie</button>
      </section>
      <section>
        {movies.length > 0 && !loading && !error &&<MoviesList movies={movies}/>}
      {movies.length === 0 && !loading && <p>found no movie</p>}
      {loading && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
      </section>
    </>
  );
}

export default App;
