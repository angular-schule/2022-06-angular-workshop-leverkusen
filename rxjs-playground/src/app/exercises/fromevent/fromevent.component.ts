import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, from } from 'rxjs';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth = 0;

  constructor() {

    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(

      // impure!:-(
      // map(event => window.innerWidth),

      // pure function! :-)
      map(event => (event.target as Window).innerWidth),
      debounceTime(2000),
      startWith(window.innerWidth)

    ).subscribe(x => this.currentWidth = x)

    /******************************/
  }

}
