//file for the controller code
//purpose: require the app & start the server listening (p. 22)

const app = require('./app');

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});

