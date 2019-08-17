import * as Bcrypt from 'bcryptjs';
import * as Hash from 'js-sha256';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
	
	checkPassword(unhashed: string, hashed: string): boolean {
		return Bcrypt.compareSync(unhashed, hashed);
	}

	hashString(text: string): string {
		return Hash.sha256(text)
	}

}
