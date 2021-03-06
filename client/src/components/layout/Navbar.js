import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i>DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Developers</Link>
        </li>
        <li>
          <Link to='/register'>register</Link>
        </li>
        <li>
          <Link to='/login'>login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
