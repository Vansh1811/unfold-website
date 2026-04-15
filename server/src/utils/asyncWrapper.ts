import { Request, Response, NextFunction } from 'express';

export const asyncWrapper = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export const catchAsync = asyncWrapper;
export default asyncWrapper;