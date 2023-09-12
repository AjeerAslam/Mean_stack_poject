const express = require('express');
const Controller = require('../Controllers/Controller');
const Middleware = require('../Middlewares/authCheck');

const router = express.Router();

router.route('/signup').post(Controller.signup);
router.route('/login').post(Controller.login);
router.route('/getUser/:id').get(Middleware.authCheck,Controller.getUser);
router.route('/userList').get(Middleware.authCheck,Controller.userList);
router.route('/userEdit/:id').patch(Middleware.authCheck,Controller.userEdit);
router.route('/userApproval/:id').patch(Middleware.authCheck,Controller.userApproval);
router.route('/userDelete/:id').delete(Middleware.authCheck,Controller.userDelete);
router.route('/passwordReset/:id').patch(Middleware.authCheck,Controller.passwordReset);
//router.route('/filtering/:key').get(Controller.filtering);

module.exports = router;

