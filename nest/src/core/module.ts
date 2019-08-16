import { CoreService} from './service';
import { Module } from '@nestjs/common';

@Module({
	exports: [CoreService],
	providers: [CoreService],
})

export class CoreModule {}
