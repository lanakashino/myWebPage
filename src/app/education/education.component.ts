import { Component, OnInit } from '@angular/core';
import { EducationService } from "../education.service";
import { Education } from "../education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getData()
      .subscribe(education => {
        this.education = education;
      })
  }
}
