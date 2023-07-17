
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  districts: any[] = [];
  activeLink: string="urban";
  title = 'cmdarpan-dailySupplyUrban';
  constructor(private http: HttpClient) { }
  setActiveLink(link: string): void {
    this.activeLink = link;
    if(this.activeLink=="rural")
        this.loadData()
    else
      this.loadDataUrban()

    
  }

  isLinkActive(link: string): boolean {
    return this.activeLink === link;
  }
  

  ngOnInit() {
    this.loadDataUrban();
  }

  loadData() {
    // Replace 'data.json' with the path to your JSON file
    this.http.get<any[]>('./assets/data_dash.json').subscribe(data => {
      this.districts = data;
    });
  }
  loadDataUrban() {
    // Replace 'data.json' with the path to your JSON file
    this.http.get<any[]>('./assets/data_dash_urb.json').subscribe(data => {
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
  exportDown()
  {
    const doc = new jsPDF()


    // Set the position and size of the header image
    const headerX = 10;
    const headerY = 10;
    const headerWidth = 150;
    const headerHeight = 30;
  
    // Add the image to the PDF
    doc.addImage("assets/logo.png", 'PNG', headerX, headerY, headerWidth, headerHeight);
  
    // Parse HTML table
    autoTable(doc, { html: '#downTable', startY: headerY + headerHeight + 10, styles: { lineWidth: .5 } });
  
    doc.save('table.pdf')
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
