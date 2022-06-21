import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books : Book[] = [{
    isbn: '111',
    title: 'Angular',
    description: 'Test',
    rating: 5
  }, {
    isbn: '222',
    title: 'AngularJS',
    description: 'Test',
    rating: 3
  }, {
    isbn: '333',
    title: 'jQuery',
    description: 'Altes Buch',
    rating: 1
  }];
}


