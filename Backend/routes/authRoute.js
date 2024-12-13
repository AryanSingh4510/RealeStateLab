import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  resetPasswordController,
  changePasswordController,
  contactUsController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

router.get("/reset-password", resetPasswordController);
router.post("/change-password", changePasswordController);

router.post("/contactus", contactUsController);

//test routes
router.get("/test", requireSignIn, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
