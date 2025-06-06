import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
} from "../controllers/auth.controller.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);
//LOGIN || POST   
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route.get
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
})

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
})



router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true })
})


router.put('/profile', requireSignIn, updateProfileController);



router.get('/orders',requireSignIn, getOrdersController)

export default router;

