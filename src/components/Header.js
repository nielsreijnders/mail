import React from 'react';

const style = {
  container: {
    width: '100%',
    color: '#fff',
    background: '#00213B',
  },
  styledImage: {
    border: 0,
    display: 'block',
    height: 'auto',
    width: '100px',
    margin: '0',
    fill: '#3451be',
    marginTop: '30px',
    marginLeft: '30px',
  },
  info: {
    border: '1px solid white',
    float: 'right',
    padding: '11px 20px',
    marginTop: '30px',
    marginRight: '30px',
    fontFamily: 'Trebuchet MS',
  },
  heading: {
    fontSize: '100px',
    fontWeight: 500,
    margin: '60px 30px 0px',
  },
  dotBackground: {
    color: '#fff',
    background: '#00213B',
    width: '100%',
    textAlign: 'center',
    marginTop: '0px',
    userSelect: 'none',
  },
  dot: {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    padding: '40px 0',
  },

};

const Header = () => (
  <>
    <table
      style={style.container}
    >
      <tbody>
        <tr>
          <td>
            <a href="http://5.61.250.27/~id70054/staging/">
              <img style={style.styledImage} alt="logo_lion" src="http://34.147.39.4/wp-content/uploads/2022/04/Logo_is_white.png" />
            </a>
          </td>
          <td style={style.info}>
            Open website
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <h1 style={style.heading}>
              Contact
              <br />
              Bevestiging
            </h1>
          </td>
        </tr>
      </tbody>
    </table>
    <table style={style.dotBackground}>
      <tbody>
        {[...Array(3)].map((empty) => (
          <tr>
            <td style={style.dot}>.</td>
            <td style={style.dot}>.</td>
            <td style={style.dot}>.</td>
            <td style={style.dot}>.</td>
            <td style={style.dot}>.</td>
          </tr>
        ))}
      </tbody>
    </table>

  </>
);

export default Header;
