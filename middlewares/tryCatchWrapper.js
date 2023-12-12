const tryCatchWrapper = (cb) => {
  return async (req, res, next) => {
    try {
      await cb();
    } catch (error) {
      next(error);
    }
  }
}