import { Component } from '@angular/core';
import {summerSports} from './summer-sports';
import {winterSports} from './winter-sports';
import {Router} from '@angular/router';

interface SportType {
  name: string;
}

@Component({
  selector: 'app-sport-types-list',
  templateUrl: './sport-types-list.component.html',
  styleUrls: ['./sport-types-list.component.scss']
})
export class SportTypesListComponent {
  availableSummerSports: SportType[] = summerSports;
  availableWinterSports: SportType[] = winterSports;
  availableSports: SportType[] = [];
  sportType: string;
  pageTitle: string;

  constructor(private router: Router) {
    this.sportType = this.router.url.split('/')[2];
    this.defineAvailableSportsAndPageTitle();
  }

  private defineAvailableSportsAndPageTitle(): void {
    if (this.sportType === 'summer') {
      this.availableSports = this.availableSummerSports;
      this.pageTitle = 'Літні види спорту';
    } else {
      this.availableSports = this.availableWinterSports;
      this.pageTitle = 'Зимові види спорту';
    }
  }
}
