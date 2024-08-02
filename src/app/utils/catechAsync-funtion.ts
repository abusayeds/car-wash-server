import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
export default catchAsync;


// admin1 token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWM3N2ZhNTIyZDAyMzQ1NDdkMDQ1YiIsInVzZXJFbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjI1NzkyMzUsImV4cCI6MTcyNTE3MTIzNX0.SN-W_l9PAvkqRDXlIftAlSswG9WpplQK3czrjwdALuI
// user1 token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWM3N2FmNTIyZDAyMzQ1NDdkMDQ1MiIsInVzZXJFbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIyNTgwMzI2LCJleHAiOjE3MjUxNzIzMjZ9.2cnUYD9gt0mr_gmIubKxzl1feW8eju6h0Ar51_pbH-Q