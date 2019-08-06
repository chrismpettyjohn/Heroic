import * as Bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {

	hashPassword(unhashed: string): string {
		return Bcrypt.hashSync(unhashed);
	}

	async checkPassword(unhashed: string, hashed: string): Promise<boolean> {
		return Bcrypt.compareSync(unhashed, hashed);
	}

}
