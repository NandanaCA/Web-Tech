import {Link} from 'react-router-dom'

export const Navbar=()=> {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
        </nav>
    )
}