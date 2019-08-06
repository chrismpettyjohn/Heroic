import { CoreService} from './service';
import { Module } from '@nestjs/common';

@Module({
	exports: [CoreService],
})

export class CoreModule {}
