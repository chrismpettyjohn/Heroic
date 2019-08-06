import { Strategy } from 'passport-local';
import { AuthService } from './service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

	constructor(private readonly authService: AuthService) {
		super();
	}

	async validate(username: string, password: string): Promise<any> {
		const user = await this.authService.validateWithPassword(username, password);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}

}
