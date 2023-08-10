import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import {
  announcementRouter,
  commentRouter,
  imageRouter,
  sessionRouter,
  userRouter,
} from "./routers";
import { addressRouter } from "./routers/address.router";
var cors = require("cors");

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/user", userRouter);
app.use("/login", sessionRouter);
app.use("/announcement", announcementRouter);
app.use("/comment", commentRouter);
app.use("/image", imageRouter);
app.use("/address", addressRouter);

app.use(middlewares.handleError);

export default app;
