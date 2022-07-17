import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Project} from "./project";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private $http: HttpClient) { }

  getData(): Observable<Project[]> {
    return this.$http.get<Project[]>('/assets/projects.json');
  }
}
