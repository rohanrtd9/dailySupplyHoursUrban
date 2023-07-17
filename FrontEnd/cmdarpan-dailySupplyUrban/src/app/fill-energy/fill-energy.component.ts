import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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

  selectedDivision: any;
  urbanGivenSupplyHours: number[] = [];
  ruralGivenSupplyHours: number[] = [];
  urbanSupplyHoursFilled: boolean = false;
  ruralSupplyHoursFilled: boolean = false;
  constructor(private dataService: DataService) { 
    
    
  }
  async ngOnInit(): Promise<void> {
    try {
      
      this.selectedDivision = (await this.dataService.fetchData("0000010105"))[0];
      console.log(this.selectedDivision);
      this.initializeActualSupplyHours();
      // Update any other UI-related properties or perform additional logic
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., show an error message or fallback UI
    }
    
    
  }
  checkValidation(): void {
    this.urbanSupplyHoursFilled = this.urbanGivenSupplyHours.every(hours => hours !== null && hours !== undefined && hours >= 0 && hours <= 24);
    this.ruralSupplyHoursFilled = this.ruralGivenSupplyHours.every(hours => hours !== null && hours !== undefined && hours >= 0 && hours <= 24);
  }
  initializeActualSupplyHours(): void {
    this.urbanGivenSupplyHours = new Array(this.selectedDivision?.DISTRICT_CODE_NIC.length).fill(null);
    this.ruralGivenSupplyHours = new Array(this.selectedDivision?.DISTRICT_CODE_NIC.length).fill(null);
  }

  onSubmit(): void {
    // Here, you can submit the actual supply hours data to your desired destination
    console.log(this.selectedDivision);
  }
}
