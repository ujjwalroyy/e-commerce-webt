import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  passwordResetController,
  registerController,
  udpatePasswordController,
  updateProfileController,
  updateProfilePicController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  limit: 100, 
  standardHeaders: "draft-7", 
  legacyHeaders: false, 
 
});

const router = express.Router();


router.post("/register", limiter, registerController);


router.post("/login", limiter, loginController);

router.get("/profile", isAuth, getUserProfileController);

router.get("/logout", isAuth, logoutController);

router.put("/profile-update", isAuth, updateProfileController);

router.put("/update-password", isAuth, udpatePasswordController);

router.put("/update-picture", isAuth, singleUpload, updateProfilePicController);

router.post("/reset-password", passwordResetController);

export default router;
