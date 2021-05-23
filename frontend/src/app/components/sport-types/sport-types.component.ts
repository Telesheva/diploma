import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from '../../interfaces/sport-types';
import {SportTypesService} from '../../services/sport-types/sport-types.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-sport-types',
  templateUrl: './sport-types.component.html',
  styleUrls: ['./sport-types.component.scss']
})
export class SportTypesComponent implements OnInit, OnDestroy {
  protected readonly destroy$: Subject<void> = new Subject();

  availableCities: City[] = [];

  constructor(private sportTypesService: SportTypesService) {}

  ngOnInit(): void {
    this.sportTypesService.getCities().pipe(takeUntil(this.destroy$)).subscribe(cities => this.availableCities = cities);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
