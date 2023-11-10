import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription, filter, map, pairwise } from 'rxjs';

@Component({
  selector: 'app-chrono-header',
  templateUrl: './chrono-header.component.html',
  styleUrls: ['./chrono-header.component.scss'],
})
export class ChronoHeaderComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() showBackButton: boolean = true;

  private lastPage$;
  private lastPageSubscription: Subscription | undefined = undefined;
  private lastPage = '';
  readonly baseUrl = '/tabs/home';

  constructor(
    private router: Router,
    private navController: NavController
  ) {
    this.lastPage$ = this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .pipe(map((events) => events[0].urlAfterRedirects));
  }

  private configBackRouterStrategy() {
    if (this.showBackButton && !this.lastPageSubscription) {
      this.lastPageSubscription = this.lastPage$.subscribe(
        (lastUrl) => (this.lastPage = lastUrl)
      );
    }
  }

  ngOnInit(): void {
    this.configBackRouterStrategy();
  }

  ngOnDestroy(): void {
    this.lastPage$?.subscribe().unsubscribe();
  }

  voltarAction() {
    this.navController.navigateBack(this.lastPage);
  }
}
