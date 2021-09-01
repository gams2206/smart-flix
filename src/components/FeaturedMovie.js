import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    
    
    let des = item.overview;
    var describ = '';
    if(des !== undefined){
        if(des.length > 200) {
            des = des.substring(0, 200)+'...';
            describ = des;
        }
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                        <div className="featured--info">
                            <div className="featured--note">Nota {item.vote_average}</div>
                            <div className="featured--year">{firstDate.getFullYear()}</div>
                            <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                    <div className="featured--description">{describ}</div>
                    <div className="featured--buttons">
                        <a href={`/wacth/${item.id}`} className="featured--playbutton">▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gênero: </strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}