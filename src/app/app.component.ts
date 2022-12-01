import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  public appTitle: string = 'Instagram';
  public text = 'startValue';
  public textEnter = '';
  public value = 'value';

  user: User = {
    name: 'Nastya',
    age: 28,
  };

  isAppLoading = true;

  constructor() {
    setTimeout(() => {
      this.isAppLoading = false;
    }, 3000);
  }

  changeTitleHandler() {
    this.appTitle = 'application';
  }

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value;
  }

  changeTextButtonHandler(event: any) {
    this.textEnter = (event.currentTarget as HTMLInputElement).value;
  }
}
