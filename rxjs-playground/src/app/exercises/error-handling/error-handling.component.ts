import { Component } from '@angular/core';
import { ReplaySubject, throwError, of, EMPTY, retry, catchError, share } from 'rxjs';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor(private es: ExerciseService) { }

  /**
   * Das Observable aus `this.es.randomError()` liefert mit hoher Wahrscheinlichkeit einen Fehler.
   * Probiere verschiedene Strategien aus, um den Fehler zu behandeln:
   * - 1. wiederholen
   * - Fehler weiterwerfen
   * - Fehler umwandeln (in ein normales Element)
   * - Fehler verschlucken/ignorieren
   */

  start() {
    this.es.randomError().pipe(

   /******************************/

      //retry(2)                                                          // 1. Wiederholen

      // catchError((err, caught) => caught)                              //auch 1. Wiederholen

      // catchError((err, caught) => {                                     // 2. Fehler weiterwerfen

      // return throwError(() => new Error("Stephans K. Fehler"));

      // throw new Error("Stephans K. Fehler")

      // })

      // catchError(err => {                                                 // 3. Fehler umwandeln

      //   //Return an empty Observable which gets collapsed in the output

      //   // return new Observable(subscriber => {

      //   //     subscriber.next("SUPER");

      //   //     subscriber.complete();

      //   // });

      //   return of("SUPER")

      // })



      catchError(err => {                                                 // 4. Fehler verschlucken

        //Return an empty Observable which gets collapsed in the output

        return EMPTY;

      })



       /******************************/

    ).subscribe({
      next: e => this.logStream$.next(e),
      error: err => this.logStream$.next('❌ ERROR: ' + err)
    });
  }
}
