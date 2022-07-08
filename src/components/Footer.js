import React from 'react';
import { letterSpacing } from '../styles';

const style = {
  text: {
    fontSize: '16px',
    margin: '30px 0 15px 0',
    letterSpacing: letterSpacing(-16),
    lineHeight: '32px',
  },
  footerSecond: {
    background: '#00213B',
    color: '#fff',
    width: '640px',
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'center',
    display: 'block',
    margin: '0 auto',
    padding: '35px 0px',
  },
  footer: {
    width: '640px',
    margin: '0 auto',
  },
  copyright: {
    padding: '25px 0px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#c5c5c5',
  },
};

const Footer = () => (
  <table style={style.footer}>
    <tr style={style.footerSecond}>
      <td style={{ paddingLeft: '30px' }}>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="https://topsluchtfilters.nl/disclaimer/" target="_blank" rel="noreferrer">
          Renoveren  |
        </a>
      </td>
      <td style={{ paddingLeft: '2px' }}>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="https://topsluchtfilters.nl/algemene-voorwaarden/" target="_blank" rel="noreferrer">
          Onderhouden  |
        </a>
      </td>
      <td style={{ paddingLeft: '2px' }}>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="https://topsluchtfilters.nl/privacy/" target="_blank" rel="noreferrer">
          Transformeren |
        </a>
      </td>
      <td style={{ paddingLeft: '2px' }}>
        <a style={{ color: '#fff', textDecoration: 'none' }} href="https://topsluchtfilters.nl/privacy/" target="_blank" rel="noreferrer">
          Projecten
        </a>
      </td>
    </tr>
    <tr>
      <td style={style.copyright}>
        Elk Transformeer. All rights reserved. 2022
      </td>
    </tr>
  </table>
);

export default Footer;
