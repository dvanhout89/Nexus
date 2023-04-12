// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.less']
// })
// export class SidenavComponent {
//   events: string[] = [];
// }
// export class SidenavOpenCloseExample {
//   events: string[] = [];
//   opened: boolean | undefined;
// }
// export class AppComponent {
//   events: string[] = [];
//   opened: boolean | undefined;

//   constructor() {}

//   toggle(sidenav: MatSidenav) {
//     sidenav.toggle();
//     this.events.push(this.opened ? 'open!' : 'close!');
//   }
// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.less']
// })
// export class SideNavComponent {
//   menuItems = [
//     { name: 'Dashboard', link: '/dashboard' },
//     { name: 'Customers', link: '/customers' },
//     { name: 'Products', link: '/products' },
//     { name: 'Estimates', link: '/estimates' },
//     { name: 'Invoices', link: '/invoices' }
//   ];
//   isOpen = false;

//   toggleMenu() {
//     this.isOpen = !this.isOpen;
//   }
// }

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SideNavComponent {
  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver) {}

}
