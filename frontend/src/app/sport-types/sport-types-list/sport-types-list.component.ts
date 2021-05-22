import {Component, OnDestroy, OnInit} from '@angular/core';
import {summerSports} from './summer-sports';
import {winterSports} from './winter-sports';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface SportType {
  name: string;
}

@Component({
  selector: 'app-sport-types-list',
  templateUrl: './sport-types-list.component.html',
  styleUrls: ['./sport-types-list.component.scss']
})
export class SportTypesListComponent implements OnInit, OnDestroy {
  protected readonly destroy$: Subject<void> = new Subject();

  availableSummerSports: SportType[] = summerSports;
  availableWinterSports: SportType[] = winterSports;
  availableSports: SportType[] = [];
  sportType: string;
  pageTitle: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.sportType = params.type;
    });
    this.defineAvailableSportsAndPageTitle();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
