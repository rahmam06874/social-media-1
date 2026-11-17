import { NextFunction, Request, Response, Router } from "express";
import { userRouter } from ".";

const userRouterRouter = Router();

userRouterRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "user api" });
});

export default userRouterRouter;