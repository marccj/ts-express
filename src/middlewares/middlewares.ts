import { RequestHandler } from "express";

export const middleware: RequestHandler = (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.setHeader("X-Custom-Header", "Middleware Example");
  res.json({
    message: "Hello from middleware!",
    method: req.method,
    url: req.url,
  });
};
