import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { APP_ROUTES_PARAMS } from 'src/app/Models/Constants';
import { ApiService } from 'src/app/Services/api.service';
import { Site } from 'src/app/Models/Site';

@Component({
  selector: 'app-referent',
  templateUrl: './referent.component.html',
  styleUrls: ['./referent.component.scss']
})
export class ReferentComponent implements OnInit {

  listVille = [];
  listHopital = [];
  listSite = [];
  disponibility = [
    { value: 'Disponibles', key: 1 },
    { value: 'Tous', key: 0 }
  ];

  affichage = [
    { value: 'Liste', key: 1 },
    { value: 'Carte de France', key: 0 }
  ];
  currentSite: Site = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    const currentUrlKey = this.activatedRoute.snapshot.params[APP_ROUTES_PARAMS.URL_KEY];
    console.log("currentUrlKey", currentUrlKey)

    this.apiService.getSiteListUFs(currentUrlKey).subscribe((data) => {
      console.debug('getSiteListUFs', data);
      if (data && data.id === null) { // not found returns null
        this.router.navigate(['/']);
        return;
      }
      this.currentSite = new Site(data);
    }, (error) => {
      // go to not found
      console.error('ReferentComponent', error);
      debugger;
      this.router.navigate(['/']);
    });
  }

}
