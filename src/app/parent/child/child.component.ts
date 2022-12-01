import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../parent.component';

export interface Grades {
  math: number;
  lit: number;
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name = 'Viktor';

  @Input() surnameProps?: string;
  @Input() city?: string;
  @Input() address?: Address;

  @Output() sendGradeEvent = new EventEmitter<Grades>();
  @Output() sendValueEvent = new EventEmitter<string>();

  inputValue = '';
  sendGradeHandler() {
    const grades: Grades = {
      math: 5,
      lit: 5,
    };
    this.sendGradeEvent.emit(grades);
  }

  sendValueHandler() {
    this.sendValueEvent.emit(this.inputValue);
  }
}
