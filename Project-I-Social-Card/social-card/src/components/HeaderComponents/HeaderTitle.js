import React from 'react';
import './Header.css';
// import ImageThumbnail from './ImageThumbnail'
import HeaderContent from "./HeaderContent";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>Lambda School</h1>
      <span className="header-date">26 Jan</span>
     <HeaderContent/>
    </div>
  );
};

export default HeaderTitle;