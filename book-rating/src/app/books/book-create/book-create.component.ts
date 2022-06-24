import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
}
