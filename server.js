const express = require('');
const {create,update,remove,findall} = require('./repositories/alunosRepository');

const app = express();
const port = 3000;

app.use(express.json());