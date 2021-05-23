import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {SportTypesService} from '../../../services/sport-types/sport-types.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {SportType} from '../../../interfaces/sport-types';

@Component({
  selector: 'app-sport-types-list',
  templateUrl: './sport-types-list.component.html',
  styleUrls: ['./sport-types-list.component.scss']
})
export class SportTypesListComponent implements OnInit, OnDestroy {
  protected readonly destroy$: Subject<void> = new Subject();

  availableSports: SportType[] = [];
  sportType: string;
  pageTitle: string;

  constructor(private route: ActivatedRoute, private sportTypesService: SportTypesService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.subscribeOnQueryParams();
    this.fetchSportTypes();
    this.definePageTitle();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeOnQueryParams(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.sportType = params.type;
    });
  }

  private fetchSportTypes(): void {
    this.spinner.show('mainSpinner');

    this.sportTypesService.getSportTypes(this.sportType)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (sportTypes) => {
          this.availableSports = sportTypes;
          this.spinner.hide('mainSpinner');
        },
        error: () => this.spinner.hide('mainSpinner')
      });
  }

  private definePageTitle(): void {
    this.pageTitle = this.sportType === 'summer' ? 'Літні види спорту' : 'Зимові види спорту';
  }
}
