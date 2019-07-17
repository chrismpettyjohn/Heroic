import {ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware} from "@tsed/common";
import * as CookieParser from 'cookie-parser'
import * as BodyParser from 'body-parser'
import * as Compression from 'compression'
import * as MethodOverride from 'method-override'
const rootDir = __dirname;

@ServerSettings({
	rootDir,
	acceptMimes: ["application/json"],
	logger: {
		level: 'error'
	}
})
export class HTTPServer extends ServerLoader {

	public $onMountingMiddlewares(): void|Promise<any> {
		this
			.use(GlobalAcceptMimesMiddleware)
			.use(CookieParser())
			.use(Compression({}))
			.use(MethodOverride())
			.use(BodyParser.json())
			.use(BodyParser.urlencoded({
				extended: true
			}));
		return null;
	}

}
