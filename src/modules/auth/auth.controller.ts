import { NextFunction, Request, Response, Router } from "express";
import authService from "./auth.service.js";
import { successResponse } from "../commen/response/success-response.js";
import { loginSchema } from "./auth.validation.js";
import { BadRequestException } from "../commen/response/application-exception.js";
const authRouter = Router();

authRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log({ body: req.body });

    const result = loginSchema.safeParse(req.body);
    console.log({ result });

    if (!result.success) {
      throw new BadRequestException("validation error", {
        error: JSON.parse(result.error as any),
      });
    }

    // استدعاء الـ Service بالبيانات المؤكدة من Zod
    const user = await authService.login(result.data);

    return successResponse({
      res,
      message: "login successfully",
      data: user,
    });
  }
);

export default authRouter;