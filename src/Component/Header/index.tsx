import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  
  return (
    <header className="header">
      <div className="header-logo">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB Logo" />
      </div>
      <nav className="header-nav">
        <ul>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </nav>
      <div className="header-search">
        <input type="text" placeholder="Search for a movie, tv show, person..." />
      </div>
      <div className="header-auth">
        <button>Đăng nhập</button>
        <button>Tham gia TMDB</button>
      </div>
    </header>
  );
};

export default Header;
