import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MediaChange } from '@angular/flex-layout';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;

 

  @ViewChild('sidenav') sidenav!: MatSidenavModule;
  isExpanded = true;
  showSubmenu: boolean = false;
  showSubmenu2: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  //-------------------------------------

  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;



  

  ngOnInit() {

  }
  
}


