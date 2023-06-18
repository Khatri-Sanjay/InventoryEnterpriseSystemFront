import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list = [
    {
      number: '1',
      name: 'Sanjay Khatri',
      url: 'https://www.facebook.com/sanjay.khatri.180410',
      image:'assets/images/sanjay.jpg',
      desc:'"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."'
    },
    {
      number: '2',
      name: 'Sanjay Khatri',
      image:'assets/images/sanjay.jpg',
      url: 'https://www.facebook.com/sanjay.khatri.180410',
      desc:'"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."'
    },
    {
      number: '3',
      name: 'Sanjay Khatri',
      image:'assets/images/sanjay.jpg',
      url: 'https://www.facebook.com/sanjay.khatri.180410',
      desc:'"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
