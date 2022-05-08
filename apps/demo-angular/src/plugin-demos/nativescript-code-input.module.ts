import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCodeInputComponent } from './nativescript-code-input.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCodeInputComponent }])],
  declarations: [NativescriptCodeInputComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptCodeInputModule {}
