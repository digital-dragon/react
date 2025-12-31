import "./../css/PictureCard.css"
import { usePictureContext } from "../contexts/PictureContext";

export default function PictureCard({picture}) {
    const {isFavorite, addToFavorites, removeFromFavorites, value} = usePictureContext();

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(picture.date)
        else addToFavorites(picture)
    }

    return (<div >
        <div className="picture-poster">
            <img src={picture.url} alt={picture.title}/>
        </div>
        <div className="picture-info">
            <h3>{picture.title}</h3>
            <p>{picture.date?.split("-")[0]}</p>
        </div>
    </div>)
}