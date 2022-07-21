import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // Observer!
    var observer = {
      next: (e: string) => this.log(e),
      error: (err: any) => this.log('FEHLER' + err),
      complete: () => this.log('COMPLETE! ✅')
    };


    // Observable (ABC)|
    // var observable$ = of('😎', '🤑', '🐼');

    var observable$ = new Observable<string>(obs => {
      obs.next('🤑');

      setTimeout(() => obs.next('🐼'), 1000);
      setTimeout(() => obs.error(' ENDE!'), 1500);
    });

    // Subscription
    var subscription = observable$.subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 1200)



    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
