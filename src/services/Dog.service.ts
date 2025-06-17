import type { IDog } from "../@types/Dog";
import api from "../config/api";

export default class DogService {
    static async getDogFetch(): Promise<IDog | undefined> {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    static async getDogAxios(): Promise<IDog | undefined> {
        try {
            const response = await api.get("");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}