import React from 'react';
import Header from './Header';

const style = {
  container: {
    margin: '0 auto',
    fontFamily: "'roboto_regular', 'calibri', Arial, sans-serif",
  },
};

const Layout = ({ children }) => (
  <table
    cellPadding="0"
    cellSpacing="0"
    border="0"
    bgcolor="#F9F7F0"
    width="768"
    min-width="768px"
    style={style.container}
  >
    <tbody>
      <tr>
        <Header />
        {children}
      </tr>
    </tbody>
  </table>
);

export default Layout;
