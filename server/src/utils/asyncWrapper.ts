import { Request, Response, NextFunction } from 'express';

/**
 * Async wrapper utility to catch errors in async route handlers
 * @param fn - The async function to wrap
 * @returns Express middleware function
 */
export const asyncWrapper = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Alternative catchAsync function (alias for asyncWrapper)
 */
export const catchAsync = asyncWrapper;

export default asyncWrapper;
