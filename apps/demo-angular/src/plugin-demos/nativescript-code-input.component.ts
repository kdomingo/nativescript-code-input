import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptCodeInput } from '@demo/shared';
import { } from '@kdomcode/nativescript-code-input';

@Component({
	selector: 'demo-nativescript-code-input',
	templateUrl: 'nativescript-code-input.component.html',
})
export class NativescriptCodeInputComponent {
  
  demoShared: DemoSharedNativescriptCodeInput;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptCodeInput();
  }

}