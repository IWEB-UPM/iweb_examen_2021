import './App.css';
import {mock} from './mock-data.js';
import { useEffect, useState } from 'react';
import Cancion from './Cancion.js';

function App() {
  const [songs, setSongs] = useState(mock);
  const [myList, setMyList] = useState([]);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  function incrementLikes(index){
    const newSongs = [...songs];
    newSongs[index].likes++;
    setSongs(newSongs);
  }

  function addToMyList(index){
    const newMyList = [...myList];
    if(!newMyList.includes(songs[index])){
      newMyList.push(songs[index]);
      setMyList(newMyList);
    }
  }

  function removeFromMyList(index){
    const newMyList = [...myList];
    const lugar = newMyList.indexOf(songs[index]);
    newMyList.splice(lugar, 1);
    setMyList(newMyList);
  }

  useEffect(() => {
    setTimeout(() => {
      setMostrarBoton(false);
    }, 10000);
  }, []);

  return (
    <div>
      <h1>Lista de Canciones</h1>
      <h2>Mi lista contiene: {myList.length} canciones</h2>
        {songs.map((song, index) => {
          if(song.likes > 10){
            let alreadyInMyList = myList.includes(song);
            return (
              <Cancion key={index} index={index} alreadyInMyList={alreadyInMyList} removeFromMyList={removeFromMyList} addToMyList={addToMyList} incrementLikes={incrementLikes} mostrarBoton={mostrarBoton} cancion={song.cancion} artista={song.artista} likes={song.likes} imgUrl={song.imgUrl}/>
            );
          }
         else {
            return null;
          }
      })} 
    </div>
  );
}

export default App;
