import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/Models/Site';

@Component({
  selector: 'app-samu',
  templateUrl: './samu.component.html',
  styleUrls: ['./samu.component.scss']
})
export class SamuComponent implements OnInit {

  constructor() { }

  public cbOnlyWithAvailable = true;
  public rdDisplayStyle: 'list' | 'map' = 'list';
  public sitesResults: Site[] = undefined;

  ngOnInit(): void {
    // TODO for debug only, call search api
    this.sitesResults = [
      {
        id: 6,
        name: "HOPITAL PEDIATRIE REEDUCATION BULLION",
        bedOtherUsed: 11,
        bedOtherAvailable: 22,
        bedCovidUsed: 33,
        bedCovidAvailable: 44,
        ufs: []
      }
    ]
  }

}
