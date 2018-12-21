import { NgModule } from '@angular/core';
import { HelloComponent } from './helloworld.component';

@NgModule ({
    declarations: [HelloComponent],
    exports: [HelloComponent]
})
export class HelloModule {}
