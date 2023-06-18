import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  list: Array<any> = [
    {
      title: 'Dashboard',
      link: 'dashboard',
      icon: 'fa fa-home'
    },
    {
      title: 'Items',
      link: '/base/item-list',
      icon: 'fa fa-home'
    },
    {
      title: 'Raw Materials',
      link: '/base/rawMaterials',
      icon: 'fa fa-home'
    },
    {
      title: 'Price Prediction',
      link: '/base/prediction',
      icon: 'fa fa-home'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
