export default function Cancion(props){
  return(
  <div key={props.index} className="container">
    <img src={props.imgUrl} alt={props.cancion} width={200} height={200}/>
    <div className="child">
      <h2>Artista: {props.artista}</h2>
      <h3>Canción: {props.cancion}</h3>
      <h4>Likes: {props.likes} 
        {props.mostrarBoton ? <button className="likebutton" onClick={() => props.incrementLikes(props.index)}>Me gusta</button>:null}
        {props.alreadyInMyList ? <button className="likebutton" onClick={() => props.removeFromMyList(props.index)}>Quitar</button>:<button className="likebutton" onClick={() => props.addToMyList(props.index)}>Añadir</button>}
      </h4>
      <audio controls>
        <source src={props.mediaFile} type="audio/mpeg"/>
      </audio>
    </div>
  </div>)
}