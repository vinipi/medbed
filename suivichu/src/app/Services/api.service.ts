import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _baseHrefSiteURL = environment.baseAPI + '/site';
  private _baseHrefUFSite = environment.baseAPI + '/uf';
  private _baseHrefBedRequest = environment.baseAPI + '/bedRequest';
  constructor(private http: HttpClient) {
  }

  // UF = Unité Fonctionnelle
  getSiteListUFs(urlKey: string) { // GET ​/api​/site => Return a site with all its UFs
    const headersParamaters = { urlKey: urlKey };
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { ...headersParamaters}
    };
    return this.http.get<any>(this._baseHrefUFSite, httpOptions);
  }

  updateBedUF() { // PUT ​/api/uf/{id} => Update bed in an UF

  }

  createUF() { // POST /api/uf => Create an uf for a site

  }

  getAllBedRequest() { // GET /api/bedRequest => Return all bed requests

  }

  createBedRequest() { // POST /api/bedRequest => Create a bed request for a site

  }

  updateBedRequest() { // PUT /api/bedRequest/{id} => Update bed request

  }
}
