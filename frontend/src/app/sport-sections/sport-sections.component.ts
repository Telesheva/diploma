import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

interface Section {
  name: string;
  location: string;
  contacts: string[];
}

@Component({
  selector: 'app-sport-sections',
  templateUrl: './sport-sections.component.html',
  styleUrls: ['./sport-sections.component.scss']
})
export class SportSectionsComponent implements OnInit, OnDestroy {
  protected readonly destroy$: Subject<void> = new Subject();

  sportType: string;
  sportSections: Section[] = [];
  googleMapOptions = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.sportType = params.sportType;
    });
    this.fetchSportSections();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchSportSections(): void {
    this.sportSections = [
      {
        name: 'Section1',
        location: 'Location1',
        contacts: ['096-543-34-34', '050-432-11-12']
      },
      {
        name: 'Section2',
        location: 'Location2',
        contacts: ['097-543-34-32']
      },
      {
        name: 'Section3',
        location: 'Location3',
        contacts: ['050-432-11-12']
      }
    ];
  }
}
