export class Test {

  constructor(private antwort: number) {
    console.log('Hallo Leverkusen! 😎', this.antwort)
  }

  private _title = '';

  get title() {
    return this._title;
  }

  public set title(t: string) {
    this._title = t;
  }
}

const test = new Test(42);
console.log(test.title);
test.title = 'NEU'
