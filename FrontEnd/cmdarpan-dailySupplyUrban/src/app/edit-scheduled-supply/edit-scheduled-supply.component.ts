import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-scheduled-supply',
  templateUrl: './edit-scheduled-supply.component.html',
  styleUrls: ['./edit-scheduled-supply.component.css']
})
export class EditScheduledSupplyComponent {
  zones: any;
  constructor(private dataService: DataService) { 
    
  }
  async ngOnInit(): Promise<void> {
    try {
      
      this.zones = (await this.dataService.fetchAll());
      console.log(this.zones);
     
      // Update any other UI-related properties or perform additional logic
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., show an error message or fallback UI
    }
    
    
  }

}
