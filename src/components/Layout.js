import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Text from './Text';
import { colors } from '../styles';

const style = {
  container: {
    margin: '0 auto',
    fontFamily: 'sans-serif',
  },
};

const Layout = ({ children }) => (
  <table
    id="e_newsletter"
    cellPadding="0"
    cellSpacing="0"
    border="0"
    bgcolor="#f2f2f2"
    width="100%"
  >
    <tbody>
      <tr>
        <td>
          <table
            cellPadding="0"
            cellSpacing="0"
            border="0"
            bgcolor="#fff"
            width="640px"
            min-width="640px"
            style={style.container}
          >
            <tbody>
              <tr>
                <td>
                  <Header />
                  <Text />
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
