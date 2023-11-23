import {Link} from 'react-router-dom'

export const Navbar=()=> {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Report'>Forecast</Link>
            <Link to='/News'>News</Link>
        </nav>
    )
}
