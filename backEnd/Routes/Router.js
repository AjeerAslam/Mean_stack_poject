const express = require('express');
const Controller = require('../Controllers/Controller');

const router = express.Router();

router.route('/signup').post(Controller.signup);
router.route('/login').post(Controller.login);
router.route('/getUser/:id').get(Controller.getUser);
router.route('/userList').get(Controller.userList);
router.route('/userEdit/:id').patch(Controller.userEdit);
router.route('/userApproval/:id').patch(Controller.userApproval);
router.route('/userDelete/:id').delete(Controller.userDelete);
router.route('/passwordReset/:id').patch(Controller.passwordReset);
router.route('/filtering/:key').get(Controller.filtering);

module.exports = router;

