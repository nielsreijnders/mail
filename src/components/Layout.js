import React from 'react';
import Footer from './Footer';
import Header from './Header';

const style = {
  container: {
    margin: '0 auto',
    fontFamily: "'roboto_regular', 'calibri', Arial, sans-serif",
  },
};

const Layout = ({ children }) => (
  <table
    id="e_newsletter"
    cellPadding="0"
    cellSpacing="0"
    border="0"
    bgcolor="#EDEDED"
    width="100%"
  >
    <tbody>
      <tr>
        <td>
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
                <td>
                  <Header />
                  {children}
                  <Footer />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
);

export default Layout;
