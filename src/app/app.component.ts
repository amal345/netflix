import { Component, HostListener,OnInit,isDevMode } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix';
  navbg: any
  @HostListener('document:scroll') onWindowScroll() {
    console.log(document.body.scrollTop, 'scrolllength#');
     if (window.scrollY) {
      this.navbg = {
        'background-color': '#000000'
      }
    }
    else {
      this.navbg = {}
    }
  }
}
