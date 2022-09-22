const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});

//TODO:
//bugs: running get products makes category_id and categories show up in 2 sep places instead of together
//running post products just results in id productid and tagid. but does add to data
//running put products results in empty object. but does update the data

//all categories routes look good
//tags get good, post good