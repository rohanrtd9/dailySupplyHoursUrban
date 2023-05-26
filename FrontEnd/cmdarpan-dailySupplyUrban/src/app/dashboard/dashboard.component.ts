
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  districts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Replace 'data.json' with the path to your JSON file
    this.http.get<any[]>('./assets/data_dash.json').subscribe(data => {
      this.districts = data;
    });
  }
  calculatePercentage(given: number, scheduled: number): string {
    if (scheduled === 0) {
      return 'N/A';
    }
  
    const percentage = (given / scheduled) * 100;
    return percentage.toFixed(2) + '%';
  }
  
  getProgressBarColor(given: number, scheduled: number): string {
    const percentage = (given / scheduled) * 100;
    if (percentage >= 70) {
      return 'bg-success';
    } else if (percentage >= 40) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }
  exportToExcel() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.districts);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'districts');
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url: string = window.URL.createObjectURL(data);
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.download = fileName + '.xlsx';
    link.click();
  }
}
