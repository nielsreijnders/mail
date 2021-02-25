const createEmail = require('../hooks/useCreateEmail');

const data = {
  test: 'test',
};

createEmail(data)
  .then((html) => {
    console.log(html);
  });
