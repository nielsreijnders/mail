import React from 'react';
import { colors, letterSpacing } from '../styles';

const style = {
  container: {
    width: '100%',
    fontFamily: 'roboto_regular, calibri, Arial, sans-serif',
    textAlign: 'center',
  },
  text: {
    fontSize: '16px',
    color: colors.lightBlack,
    margin: '0 0 32px 0',
    letterSpacing: letterSpacing(-16),
    lineHeight: '32px',
  },
  image: {
    width: '45px',
    display: 'block',
    margin: '0 6px',
  },
  socials: {
    margin: '0 auto 32px',
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
      <tr>
        <td>
          <table style={style.socials}>
            <tr>
              <td>
                <img style={style.image} src="http://cdn.mcauto-images-production.sendgrid.net/56a803db46af10ff/25abaaee-c170-412a-853d-ef3bfe0e01ea/167x167.png" />
              </td>
              <td>
                <img style={style.image} src="http://cdn.mcauto-images-production.sendgrid.net/56a803db46af10ff/25abaaee-c170-412a-853d-ef3bfe0e01ea/167x167.png" />
              </td>
              <td>
                <img style={style.image} src="http://cdn.mcauto-images-production.sendgrid.net/56a803db46af10ff/25abaaee-c170-412a-853d-ef3bfe0e01ea/167x167.png" />
              </td>

            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
);

export default Footer;
