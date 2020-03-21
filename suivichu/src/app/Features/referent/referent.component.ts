import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
