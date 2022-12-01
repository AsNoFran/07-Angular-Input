import { Component, OnInit } from '@angular/core';
import { DeveloperModel } from '../model/developer.model';
import { SkillModel } from '../model/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  developer: DeveloperModel = new DeveloperModel(
    'François',
    'Dehaies',
    32,
    'Male',
    'Futur développeur',
    [
      new SkillModel(
        'Angular',
        'https://cdn.iconscout.com/icon/free/png-256/angular-2752246-2285063.png',
        'https://angular.io/'
      ),
    ]
  );
  constructor() {}

  ngOnInit(): void {}
}
