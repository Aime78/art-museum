import {Link, useParams} from 'react-router-dom'

function ArtDescription({gallery, artworks}) {
    const {artId} = useParams()

    const artwork = artworks.find( artwork => artwork.id == artId)

    console.log(artwork)

    return (
        <div>
            <div>
                <Link to={`/galleries/${gallery.galleryid}`}>Back to Gallery {gallery.name}</Link>
            </div>
            <div>
                <h1>Hello</h1>
                <h3><a href={artwork.url} target='_blank'>{artwork.title}</a></h3>
                <ul>
                    {artwork.images.map(image => (
                        <li key={image.imageid}><img src={image.baseimageurl} width='300' height='350' /></li>
                    ))}
                </ul>
                <p>{artwork.description}</p>
                <h4>{artwork.creditline}</h4>
                <h4>{artwork.technique}</h4>

                {/* <ul>

                {artworks.map(artwork => (<li key={artwork.id}>
                    <h3><a href={artwork.url} target='_blank'>{artwork.title}</a></h3>
                        <ul>
                            {artwork.images.map(image => (
                                <li key={image.imageid}><img src={image.baseimageurl} width='300' height='350' /></li>
                            ))}
                        </ul>
                    <p>{artwork.description}</p>
                    <h4>{artwork.creditline}</h4>
                    <h4>{artwork.technique}</h4>
                    </li>))}
                </ul> */}
                
            </div>
            
         

        </div>
    )
}

export default ArtDescription