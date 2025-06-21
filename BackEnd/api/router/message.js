import express from "express";
import {sendMessages} from "../controller/message.js"

const router = express.Router();

router.post("/send", sendMessages);

export default router;
