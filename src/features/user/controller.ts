import { Request, Response, NextFunction } from "express";

import UserService from "./services";
import { registerSchema } from "./validators";

class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = registerSchema.parse(req.body);
      const newUser = await this.userService.createUser(payload);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ id: req.user?.id, username: req.user?.username });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
