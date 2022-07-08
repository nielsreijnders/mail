import React from 'react';

export default function Text() {
  const layout = 'big_text';

  const style = {
    styledText: {
      padding: '30px',
      display: 'block',
      color: '#fff',
      background: '#00213B',
      lineHeight: '44px',
      fontSize: layout === 'big_text' && '32px',
    },
  };

  return (
    <table style={style.styledText}>
      <tr>
        <td>
          Hi Niels Reijnders,
          {' '}
          <br />
          <br />
          {' '}
          <span style={{ background: '#fff', color: '#00213B' }}>responsibility.</span>
          {' '}
          And most importantly, you will be in control of making your
          job the coolest job you’ve ever had.
        </td>
      </tr>
    </table>
  );
}
