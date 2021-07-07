import { Input, Component } from '@angular/core';
import { IPerson } from '../../models/person';

@Component({
  selector: 'professor-table-element',
  templateUrl: './professor-table-element.component.html',
})

export class ProfessorTableElementComponent {
    @Input() professor: IPerson;
}
