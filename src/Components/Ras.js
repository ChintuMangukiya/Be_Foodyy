
const RastaurantCard = (prop) =>{
    return(
        <div className="res-card">
        <div className="rastaurantcard">
            <div className="food" style={{
                backgroundImage : `url(${prop.info.res})`,
                }}></div>
            <p className="res">{prop.info.resName}</p>
            <p className="starRating">{prop.info.starRating} ★</p>
            <p className="cccc">{prop.info.cuisines}</p> 
            <p className="slaString"><span className="uperle">•</span>{prop.info.slaString}</p>
        </div>
        </div>
    );
}

export default RastaurantCard;