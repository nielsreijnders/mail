import React from 'react';
import Layout from '../components/Layout';

const style = {
  container: {
    backgroundColor: '#F9F7F0',
    padding: '20px 0',
    fontFamily: 'sans-serif',
  },
};

function Order() {
  return (
    <Layout>
      <div style={style.container}>
        Basic template v1.0.0
      </div>
    </Layout>
  );
}

export default Order;
