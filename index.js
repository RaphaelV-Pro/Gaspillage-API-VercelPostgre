const express = require('express');
const app = express();
//const db = require('./database');

require('dotenv').config();

app.use(express.json());

//const port = 3000
/*
app.use('/', (req, res) => {
  res.send('Hello World!')
})
*/

const usersRouter = require('./routes/users.router');
const categoryRouter = require('./routes/category.router');
const fridgeRouter = require('./controllers/fridge.controller');
const itemRouter = require('./controllers/item.controller');

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/fridge", fridgeRouter);
app.use("/api/v1/item", itemRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
});