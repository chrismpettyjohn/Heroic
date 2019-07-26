import * as CookieParser from 'cookie-parser'
import * as BodyParser from 'body-parser'
import * as Compression from 'compression'
import * as MethodOverride from 'method-override'
import {BanMiddleware} from "./middleware/user/ban";
import {GlobalMiddleware} from "./middleware/global";
import {ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware} from "@tsed/common";
import {$log} from "ts-log-debug";


const rootDir = __dirname;

$log.level = 'error'

@ServerSettings({
	rootDir,
	acceptMimes: ["application/json"],
	componentsScan: [
		`${rootDir}/middleware/**/**.ts`
	]
})
export class HTTPServer extends ServerLoader {

	public $onMountingMiddlewares(): void {
		this
			.use(GlobalAcceptMimesMiddleware)
			.use(CookieParser())
			.use(Compression({}))
			.use(MethodOverride())
			.use(BodyParser.json())
			.use(BodyParser.urlencoded({
				extended: true
			}))
			.use(GlobalMiddleware)
			.use(BanMiddleware)
	}

}
