import { Component, Input, OnInit } from '@angular/core';
import { ITreatment } from '../../shared/interfaces/treatment';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.scss'],
})
export class TreatmentDetailsComponent implements OnInit {
  @Input() treatment: ITreatment;

  constructor() {}

  ngOnInit() {}
}
