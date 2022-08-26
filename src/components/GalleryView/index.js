import { useParams, Route } from 'react-router-dom'
import ArtImageTile from '../ArtImageTile'
import ArtDescription from '../ArtDecription'

function GalleryView({galleries}) {

    const {galleryId} = useParams()
    const gallery = galleries.find(gallery => galleryId == gallery.galleryid)

    const artworks = gallery.objects

    
    return(
        <>
         <h2>{gallery.name}</h2>
         <Route exact path='/galleries/:galleryId'>
            {artworks.map(artwork => (<ArtImageTile key={artwork.id}
            galleryId = {galleryId}
            art={artwork}/>))}
         </Route>
         <Route path='/galleries/:galleryId/art/:artId'>
            <ArtDescription gallery={gallery} artworks={artworks}/>
         </Route>
        </>


    )
}

export default GalleryView