import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'suivichu';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
 ) { }
  
  ngOnInit() {

    this.updateTitleOnPageChange();
  }

  private updateTitleOnPageChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => (route.firstChild.firstChild && route.firstChild.firstChild.firstChild) || route.firstChild.firstChild || route.firstChild), // handles second navigation level for mart
      switchMap(route => route.data),
    ).subscribe((data) => {
      //const mainRoute = this.activatedRoute.snapshot.firstChild.routeConfig.path; 
      const {appTitle} = environment;
      this.titleService.setTitle(`${appTitle} - ${data.title}`);
    });
  }
}
