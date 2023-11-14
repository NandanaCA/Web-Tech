import {Link} from 'react-router-dom'

export const Navbar=()=> {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Report'>Report</Link>
            <Link to='/Trends'>Trends</Link>
            <Link to='/Map'>Map</Link>
        </nav>
    )
}
