import * as Bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
	
	checkPassword(unhashed: string, hashed: string): boolean {
		return Bcrypt.compareSync(unhashed, hashed);
	}

}
