import './Pokemon.css';
import { Link } from 'react-router-dom';

function Pokemon({name, image, id}){
    return(
        <div className='pokemon'>
        <Link to={`/pokemon/${id}`}>
            <div className='title'>{name}</div>
            <div className='pokemon-img'><img src={image}/></div>
        </Link>
        </div>
    )
}
export default Pokemon;