import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule
    ],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class NavModule {}
