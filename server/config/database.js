const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.resolve('server/models');

mongoose.connect('mongodb://localhost:27017/bicycles',
  { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.on('connected', () => console.log('MongoDB connected'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath,file)));
