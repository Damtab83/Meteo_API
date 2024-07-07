import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

export class WeatherController {
    private API_KEY: string;

    constructor(apiKey: string) {
        this.API_KEY = apiKey;
    }

    public async getWeather(req: Request, res: Response): Promise<void> {
        const city: string = req.params.city;
        try {
            const response: AxiosResponse = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}`
            );
            const data = response.data;
            res.json(data);
        } catch(error) {
            res
            .status(500)
            .json({error: "erreur lors de la récupération des données météo"})
        }
    }
}