import express from "express";
import session from "express-session";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      /^chrome-extension:\/\/.+/,
      "https://duo-drive-ext.vercel.app",
    ],
  })
);
app.use(express.json());
app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
  })
);

// Route declaration
import responseRouter from "../backend/router/generate-response.router.js";

app.use("/api/v1", responseRouter);

export default app;
