import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
   
   return(
      <div >
        <header>
            <nav class="navbar">
                <h3>Vivekanand College</h3>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
                <button type="submit">Apply Now!</button>
            </nav>
        </header>
      </div>
   )

}

export default Header;