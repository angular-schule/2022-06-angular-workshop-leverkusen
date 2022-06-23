import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor(private br: BookRatingService) {
    // setTimeout(() => this.books = [], 3000)
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    this.books = this.books
      .map(b => (b.isbn === ratedBook.isbn) ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }
}


