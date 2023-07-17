import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showEditingComponent = false;

  toggleEditingComponent(): void {
    this.showEditingComponent = !this.showEditingComponent;
  }
}
