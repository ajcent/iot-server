import express from "express";
import passport from "passport";

// TODO: remove ZodError, create global error
import UserController from "./controller";
import UserService from "./services";

const router = express.Router();
const userController = new UserController(new UserService());

router.post("/register", userController.register);
router.post("/login", passport.authenticate("local"), userController.login);

router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to log out" });
    }
    res.json({ message: "Successfully logged out" });
  });
});

export default router;
