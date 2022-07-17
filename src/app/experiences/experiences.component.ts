import { Component, OnInit } from '@angular/core';
import { ExperienceService } from "../experience.service";
import { Experience } from "../experience";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
  this.experienceService.getData()
    .subscribe(experiences => {
      this.experiences = experiences;
    });
  }
}
