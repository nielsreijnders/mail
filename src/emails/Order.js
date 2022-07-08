import React from 'react';
import Layout from '../components/Layout';

const style = {
  container: {
    padding: '50px',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    margin: 0,
    background: '#000',
    color: '#fff',
    width: '640px',
  },
  image: {
    width: '100%',
    // height: '300px',
  },
};

function Order() {
  return (
    <Layout>
      <tr width="640px">
        <td>
          <img alt="lion_logo" src="https://lionprotects.db4844.web41.ixl.nu/wp-content/uploads/2021/12/BAT-0-Open.jpg" style={style.image} />
        </td>
      </tr>
      <tr>
        <td style={style.container}>
          HTML HERE
        </td>
      </tr>
    </Layout>
  );
}

export default Order;
