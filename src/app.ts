import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import globalErrorHandler from "./app/middwares/globalErrorhandler";
const app: Application = express();

app.use(express.json());
app.use(cors({origin : "https://car-wash-server-omega.vercel.app", credentials : true}));
app.use('/', router)


app.get("/", (req: Request, res: Response) => {
  res.send('Server is Running !')
});
app.use(globalErrorHandler)

export default app;
