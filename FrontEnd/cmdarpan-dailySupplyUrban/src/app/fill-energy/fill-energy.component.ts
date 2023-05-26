import { Component, OnInit } from '@angular/core';

interface Division {
  DivisionCode: number;
  Division: string;
  DistrictCode: number[];
  DistrictName: string[];
  ScheduledSupplyHours: number[];
}

@Component({
  selector: 'app-fill-energy',
  templateUrl: './fill-energy.component.html',
  styleUrls: ['./fill-energy.component.css']
})
export class FillEnergyComponent implements OnInit {
  divisions: Division[] = [
    {
      "DivisionCode": 3,
      "Division": "Agra",
      "DistrictCode": [118, 143, 166, 167],
      "DistrictName": ["AGRA", "FIROZABAD", "MAINPURI", "MATHURA"],
      "ScheduledSupplyHours": [23, 24, 22, 21]
    }
  ];

  selectedDivision: Division = this.divisions[0];
  actualSupplyHours: number[] = [];

  ngOnInit(): void {
    this.initializeActualSupplyHours();
  }

  initializeActualSupplyHours(): void {
    this.actualSupplyHours = new Array(this.selectedDivision.DistrictCode.length).fill(0);
  }

  onSubmit(): void {
    // Here, you can submit the actual supply hours data to your desired destination
    console.log(this.actualSupplyHours);
  }
}
