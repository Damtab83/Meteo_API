import express, { Request, Response } from "express";
import { WeatherController } from "./weatherController";

const app = express();
const API_KEY ="ab559c66b5e041689e2140942242606";
const weatehrController = new WeatherController(API_KEY);

const PORT: number = process.env.port ? parseInt(process.env.port): 3000;

app.get("/testMeteo", (req: Request,res: Response) => {
    res.send("Coucou je suis dans l'API Météo");
})

app.get("/weather/:city", async(req: Request, res: Response) => {
    await weatehrController.getWeather(req, res);
})

app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'éxecution sur le port ${PORT}`);
})