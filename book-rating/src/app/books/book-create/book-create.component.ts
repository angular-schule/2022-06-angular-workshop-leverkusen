import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  isInvalid(path: string) : boolean {
    const control = this.bookForm.get(path);
    return !!control && control.touched && control.invalid;
  }

  submitForm(): void {

    const newBook = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    // ** Hands On! **
    // 1. Erzeuge ein Event mit dem Namen `create``
    // 2. Versende das Event mit dem neuen Buch
    // 3. Subscribe dich im Dashboard auf das Event
    // 4. Füge das neue Buch dem Array aus Büchern hinzu (Immutability beachten!)


    this.bookForm.reset();

  }
}
