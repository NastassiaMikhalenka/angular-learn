import { Component } from '@angular/core';
import { Grades } from './child/child.component';

export interface Address {
  street: string;
  house: number;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  name = 'Ivan';
  surname = 'Petrov';
  city = 'Minsk';
  address: Address = {
    street: 'Lenina',
    house: 27,
  };
  grades?: Grades;

  values: string[] = [];

  getGrade(value: Grades) {
    this.grades = value;
  }

  getValue(data: string) {
    this.values.push(data);
  }
}
