import { useEffect, useState } from "react";
import PictureCard from "../components/PictureCard";
import { getPictures } from "../services/api";

import "./../css/Home.css"

function Home() {
    const [ searchQuery, setSearchQuery ] = useState("");
    const [pictures, setPictures] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPictures = async () => {
            try {
                const pics = await getPictures();
                setPictures(pics);
            } catch (err) {}
            finally {
                setLoading(false)
            }
        }
        loadPictures();
    },[]);

    const handleSearch = (e) => {
        alert(searchQuery, e.target.value);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for pictures..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            { loading && <h4 style={{ textAlign: "center", color: "yellow"}}>loading...</h4>}
            <div className="pictures-grid">
                {
                    pictures.map(picture => 
                        picture.title.includes(searchQuery.trim()) && <PictureCard picture={picture} key={picture.url} />
                    )
                }
            </div>
        </div>)
}

export default Home;