import express from "express";
import { appConnection } from "./Src/Config/appConfig.js";
import { dbConnection } from "./Src/Config/dbConfig.js";
import cors from 'cors';
import router from "./Src/router/router.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
dbConnection();

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }));
  
app.use(morgan("dev"))

app.use("/api",router);

appConnection(app);
