import "dotenv/config";
import "reflect-metadata";
import Heroic from "./heroic";
import {createConnection} from "typeorm";

const init = async (): Promise<void> => {
	await createConnection();
	new Heroic()
}

init()
