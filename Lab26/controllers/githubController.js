const axios = require('axios');
const githubModel = require('../models/githubModel');

exports.getUser = async (req, res) => {
  try {
    const username = 'ZValer';
    const userData = await githubModel.getUserData(username);
    res.render('index', { userData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user data');
  }
};

