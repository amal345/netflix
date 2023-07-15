import { Component, HostListener,OnInit,isDevMode } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'netflix';
  navbg: any;
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
      
    } else {
      console.log('Production!');
    }
  }
  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#');
    if (document.body.scrollTop || document.documentElement.scrollTop) {
      this.navbg = {
        'background-color': '#000000'
      }
    } else {
      this.navbg = {}
    }
  }
}
