import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { selectBooks, selectLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = this.store.select(selectBooks);
  loading$ = this.store.select(selectLoading);

  constructor(private store: Store) {
  }

  doRateDown(book: Book): void {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book): void {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? book.rating + 1 : 5
    // // }
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => (b.isbn === ratedBook.isbn) ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book): void {
    // this.books = [...this.books, newBook];
  }
}


