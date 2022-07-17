import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Experience } from "./experience";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private $http: HttpClient) { }

  getData(): Observable<Experience[]> {
    return this.$http.get<Experience[]>('/assets/experiences.json');
  }
}
