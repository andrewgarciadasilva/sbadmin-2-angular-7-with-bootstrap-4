import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HelloModule } from '../helloworld/helloworld.module';
import { NavModule } from '../nav/nav.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule ({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HelloModule,
        NavModule,
        LoadingModule,
    ],
    declarations: [MainComponent],
    exports: [MainComponent]
})
export class MainModule {}
