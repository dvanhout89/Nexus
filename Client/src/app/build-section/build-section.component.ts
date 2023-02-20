import { Component } from '@angular/core';

@Component({
  selector: 'app-build-section',
  templateUrl: './build-section.component.html',
  styleUrls: ['./build-section.component.less'], 
})


export class BuildSectionComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}



