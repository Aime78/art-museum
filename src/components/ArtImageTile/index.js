
import {Link} from 'react-router-dom'
function ArtImageTile({art, galleryId}) {
    const artImage = art.images[0].baseimageurl
    
    return(
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={artImage} width='500' height='500'/>
        </Link> 
    )
}

export default ArtImageTile