import { Component } from '@angular/core';

interface City {
  name: string;
}

@Component({
  selector: 'app-sport-types',
  templateUrl: './sport-types.component.html',
  styleUrls: ['./sport-types.component.scss']
})
export class SportTypesComponent {
  availableCities: City[] = [
    { name: 'Харків' },
    { name: 'Київ' },
    { name: 'Львів' },
    { name: 'Одесса' },
    { name: 'Дніпро' }
  ];
}
