import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component ({
    selector: 'app-main',
    templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit{
    title = 'IoTLink2';
    showLoading = false;

    constructor (private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe( (RouterEvent: Event) => {
            if(RouterEvent instanceof NavigationStart) {
                this.showLoading = true;
            }
    
            if(RouterEvent instanceof NavigationEnd 
                || RouterEvent instanceof NavigationCancel 
                || RouterEvent instanceof NavigationError) {
                    this.showLoading = false;
            }
        } );
      }
}
