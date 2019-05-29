import React from 'react';
import './Header.css';
// import ImageThumbnail from './ImageThumbnail'
import HeaderContent from "./HeaderContent";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>Lambda School</h1>
      <p className="fineprint">@LambdaSchool 26 Jan</p>
      <HeaderContent/>
    </div>
  );
};

export default HeaderTitle;