import { Injectable } from '@nestjs/common';
import { AuthConstants } from '../constants';
import { UserEntity} from '../../user/entity';
import {UserService} from '../../user/service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(private readonly userService: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: AuthConstants.secret,
		});
	}

	async validate(payload: any) {
		const user: UserEntity = await this.userService.findByID(payload.userId)
		return user
	}
}
