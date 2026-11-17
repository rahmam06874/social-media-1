import express, { NextFunction, Request, Response } from "express";
import { type Express } from "express";

import { authRouter } from "./modules/auth";
import { userRouter } from "./modules/user";
// import path from "node:path";

const bootstrap = () => {
    const app: Express = express();
    app.use(express.json());
    // console.log({ path: path.join("") });

    app.get("/", (req: Request, res: Response, next: NextFunction): void => {
        res.status(200).json({ message: "hello TS" });
    });

    app.use("/auth", authRouter);
    app.use("/user", userRouter);

    app.listen(3000, () => {
        console.log("server is running .....");
    });

    console.log("app is running");
};

export default bootstrap;
