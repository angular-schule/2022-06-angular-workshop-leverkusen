import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent  {

  @Input()
  book?: Book;

  get stars() {
    console.log('TEST');
    return new Array(this.book?.rating);
  }

}
