import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/amovies.png';

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='' />
            <Link to='/'>aMovies</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term of services</Link>
            <Link to='/'>About us</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Privacy policy</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Annie David</Link>
            <a href='https://github.com/anniedavid13'>Github</a>
            <a href='https://www.linkedin.com/in/annie-david-b36431215/'>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
