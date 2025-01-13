import ShipEngine from "shipengine";

const apikey = process.env.SHIPENGINE_API_KEY as string
export const shipengine = new ShipEngine(apikey)
