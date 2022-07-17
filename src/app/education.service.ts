import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Education} from "./education";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private $http: HttpClient) { }

  getData(): Observable<Education[]> {
    return this.$http.get<Education[]>('/assets/education.json');
  }
}
