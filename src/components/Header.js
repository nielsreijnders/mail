import React from 'react';

const style = {
  container: {
    width: '100%',
    fontFamily: "'roboto_regular', 'calibri', Arial, sans-serif",
    background: "#fff",
  },
  styledImage: {
    border: 0,
    height: 'auto',
    display: 'block',
    width: "160px",
    margin: '0 auto',
    padding: '30px',
  }
};

const Header = ({children}) => {
  return (
    <table 
      style={style.container}
      >
      <tbody>
        <tr>
          <a>
          <img
            alt="HEYO logo"
            src="http://cdn.mcauto-images-production.sendgrid.net/27c8c65ba7b3d635/e6814b23-0cb7-4b99-a2fc-319dc28a2747/640x160.png"
            style={style.styledImage}
            />
          </a>
        </tr>
      </tbody>
    </table>
  );
};

export default Header;
