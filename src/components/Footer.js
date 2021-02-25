import React from 'react';

const style = {
  container: {
    width: '100%',
    fontFamily: 'roboto_regular, calibri, Arial, sans-serif',
    textAlign: 'center',
  },
  text: {
    fontSize: '16px',
  },
};

const Footer = () => (
  <table
    style={style.container}
  >
    <tbody>
      <tr>
        <td>
          <p style={style.text}>Blijf op de hoogte, volg ons ook via:</p>
        </td>
      </tr>
    </tbody>
  </table>
);

export default Footer;
