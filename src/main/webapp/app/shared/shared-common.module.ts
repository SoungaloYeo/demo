import { NgModule } from '@angular/core';

import { DemoAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DemoAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DemoAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DemoAppSharedCommonModule {}
