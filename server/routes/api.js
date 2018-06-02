/*
 * @Author: Nizars
 * @Date: 2018-05-27 09:19:52
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-01 13:02:57
 */

// Import environment keys and values
require('dotenv').config();

// Import dependancies and modules
const express           = require('express');
const router            = express.Router();
const jwt               = require('jsonwebtoken');
const status            = require('http-status');
const twUsers           = require('../auth/helpers/users');

// GET a user by ID
router.get('/userbyid/:userId', async (req, res) => {
    console.log('CALLED: function router.get(/userbyid/userId, (req, res) in API.JS');
    var userId = req.params.userId;
    var result = await twUsers.SingleUserById(userId);
    userFound = {
        id: result.id,
        login: result.login,
        display_name: result.display_name,
        type: result.type,
        broadcaster_type: result.broadcaster_type,
        description: result.description,
        profile_image_url: result.profile_image_url,
        offline_image_url: result.offline_image_url,
        view_count: result.view_count,
        email: result.email
    };
    console.log('Result from twitchGetUser.SingleUserById(userId) in api.js:');
    console.log(userFound);
    res.status(status.OK).json(userFound);
});

// GET a user by Login
router.get('/userbylogin/:userLogin', async (req, res) => {
    console.log('CALLED: function router.get(/userbylogin/userLogin, (req, res) in API.JS');
    var userLogin = req.params.userLogin;
    var result = await twUsers.SingleUserByLogin(userLogin);
    userFound = {
        id: result.id,
        login: result.login,
        display_name: result.display_name,
        type: result.type,
        broadcaster_type: result.broadcaster_type,
        description: result.description,
        profile_image_url: result.profile_image_url,
        offline_image_url: result.offline_image_url,
        view_count: result.view_count,
        email: result.email
    };
    console.log('Result from twitchGetUser.SingleUserById(userId) in api.js:');
    console.log(userFound);
    res.status(status.OK).json(userFound);
});

module.exports = router;
