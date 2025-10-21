import express from "express";
import * as belajarController from "../controllers/belajarControllers.js";

const api = express.Router();

api.get("/belajar", belajarController.listBelajar);
api.post("/belajar", belajarController.createNewBelajar);
api.put("/belajar/:id", belajarController.updateBelajar);
api.delete("/belajar/:id", belajarController.deleteBelajar);

export default api;


