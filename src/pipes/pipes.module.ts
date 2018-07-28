import { NgModule } from '@angular/core';
import { ErrorMessagePipe } from './error-message/error-message';
@NgModule({
	declarations: [ErrorMessagePipe],
	imports: [],
	exports: [ErrorMessagePipe]
})
export class PipesModule {}
