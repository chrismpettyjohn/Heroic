import {UserEntity} from '../user/entity';
import { Injectable } from '@nestjs/common';
import { UserService} from '../user/service';
import { CoreService } from '../core/service';

@Injectable()
export class AuthService {

	constructor(private readonly coreService: CoreService, private readonly userService: UserService) { }

	async validateWithPassword(username: string, password: string): Promise<any> {
		const user: UserEntity = await this.userService.findOne(username, {
			select: 'password'
		});
		if (user && this.coreService.checkPassword(password, user.password)) {
			return {
				password,
				...user
			};
		}
		return null;
	}

}
