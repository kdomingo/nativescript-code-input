import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCodeInput } from '@demo/shared';
import { } from '@kdomcode/nativescript-code-input';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptCodeInput {
	
}
