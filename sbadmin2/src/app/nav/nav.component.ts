import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('ngbCollapse') collapse: boolean;
  isCollapsed = false;
  isCollapseduIElements = false;
  isCollapsedSidebar = false;
  isCollapsedSample = false;
  isCollapsedTLevel = false;
  isCollapsedCharts = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isCollapsed = false;
      }
    });
}

  ngOnInit() {
  }

}
