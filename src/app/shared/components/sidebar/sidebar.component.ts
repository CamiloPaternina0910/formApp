import { Component } from '@angular/core';

interface MenuItem{
  title: string; 
  url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  reactiveMenu: MenuItem[] = [
    {
      title: 'Basicos',
      url: './reactive/basic'
    },
    {
      title: 'Dinamicos',
      url: './reactive/dinamyc'
    },
    {
      title: 'Switches',
      url: './reactive/switches'
    }
  ]

  authMenu: MenuItem[] = [
    {
      title: 'Registro',
      url: './auth'
    }
  ]

}
