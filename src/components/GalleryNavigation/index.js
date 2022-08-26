
import {NavLink, Route} from 'react-router-dom'
import './GalleryNavigation.css'

function NavigationLink({name, id}) {
    
    return(
        <NavLink to={`/gallery/${id}`}>
            {name}
        </NavLink>
    )
}
function GalleryNavigation({galleries}) {
    
    return(
        // <nav> 
        //     <ul>

        //         {galleries.map(gallery =>
        //         (
        //             <li key={galleries.gallerynumber}>
        //                 <NavigationLink 
        //                 name={gallery.name} id={gallery.galleryid}/>
        //             </li>
                    
        //         ))}
        //     </ul>
        // </nav>
        <>
        
            <nav>

                <h1>Galleries</h1>
                <NavLink exact to='/'>Home</NavLink>
                {galleries.map(gallery => (
                    <NavLink 
                    key={gallery.galleryid} 
                    to={`/galleries/${gallery.galleryid}`}>
                        {gallery.name}
                    </NavLink>))}
            </nav>
                    
            <Route path='/galleries/:galleryId'>
                <h1>Gallery Info</h1>
            </Route>  
        </>

    )
}

export default GalleryNavigation