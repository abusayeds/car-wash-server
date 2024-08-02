import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
export default catchAsync;


//  admin1 token =
//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWNlNDc1MjdhMjdiMjJlMjUzZWM5MiIsInVzZXJFbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjI2MDY5NjIsImV4cCI6MTcyNTE5ODk2Mn0.pfMM7IaLivF3JP_3vDC9LmJiKH4q6Ji5ODwrziPeNws

//  user1 token =
//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWNlNDM0MjdhMjdiMjJlMjUzZWM4MSIsInVzZXJFbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIyNjA2OTk0LCJleHAiOjE3MjUxOTg5OTR9.Cl7cl7CMRpXzAwLoqpvZ7rcGvXgt3al0fV4RPJpvWAQ

//  user1 token =
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWNlNDRhMjdhMjdiMjJlMjUzZWM4YyIsInVzZXJFbWFpbCI6InVzZXIyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIyNjA3MDI3LCJleHAiOjE3MjUxOTkwMjd9._G4iw6we2-U0MKW0AN-shgdzcVHUlp1BZAeGc09fAGo 

 