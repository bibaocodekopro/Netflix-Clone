import { Component,Host,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NetflixClone';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000',
        'transition': 'all 1.2s ease',
        '-webkit-transition': 'all 1.2s ease'
      }
    }else
    {
        this.navbg = {}
    }
  }
}
