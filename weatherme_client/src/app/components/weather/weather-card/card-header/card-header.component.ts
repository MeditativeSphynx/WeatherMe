import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.sass']
})
export class CardHeaderComponent {
  @Input('currentTempF') currentTempF?: number | null;
  @Input('currentConditionsIcon') currentConditionsIcon?: string;
  @Input('currentConditionsText') currentConditionsText?: string;
}
