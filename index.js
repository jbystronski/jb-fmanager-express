const fm = require("@jb_fmanager/node-utils");

module.exports = (app, { prefix = "/", errorHandler, maxUploadSize }) => {
  const wrapAsync = async (fn, res, next, ...args) => {
    try {
      const result = await fn(...args);
      res.status(200).json(result || {});
    } catch (error) {
      errorHandler ? errorHandler(error) : next(error);
    }
  };

  app.get(
    prefix + "/map",
    async ({ query }, res, next) =>
      await wrapAsync(fm.map, res, next, query.path)
  );

  app.get(
    prefix + "/create_folder",
    async ({ query }, res, next) =>
      await wrapAsync(fm.create_folder, res, next, query.path, query.name)
  );

  app.get(
    prefix + "/rename",
    async ({ query }, res, next) =>
      await wrapAsync(fm.rename, res, next, query.oldPath, query.newPath)
  );

  app.post(
    prefix + "/remove",
    async ({ body }, res, next) => await wrapAsync(fm.remove, res, next, body)
  );

  app.post(
    prefix + "/copy",
    async ({ query, body }, res, next) =>
      await wrapAsync(fm.copy, res, next, query.target, body)
  );

  app.post(
    prefix + "/move",
    async ({ query, body }, res, next) =>
      await wrapAsync(fm.move, res, next, query.target, body)
  );

  app.post(prefix + "/upload", async (req, res, next) => {
    const uploadLimit = maxUploadSize || req.query.max_size;

    try {
      const pd = await fm.upload(req, res, req.query.destination, uploadLimit);

      res.status(200).json(pd);
    } catch (error) {
      errorHandler ? errorHandler(error) : next(error);
    }
  });
};
