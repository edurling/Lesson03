import express from 'express'
import authCtrl from '../controllers/auth.controller'
import user from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'

const router = express.Router ()
const signin = (req, res) => { ... }
const signout = (req, res) =>  { ... }
const requireSignin = ...
const hasAuthorization = (req, res) => { ... }

router.route ('/auth/signin') .post (authCtrl.signin)
router.route ('/auth/signout') .get (authCtrl.signout)
router.route ('/auth/signin') .post (authCtrl.signin)
router.route ('/auth/signout') .get (authCtrl.signout)

export default router
export default { singin, singout, requireSignin, hasAuthorization }