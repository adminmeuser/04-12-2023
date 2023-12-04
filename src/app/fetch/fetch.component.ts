import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.scss'
})
export class FetchComponent implements OnInit {
  // detailsList: any[] = [];
  // userId!: string;
  // selectedDetail: any;

  items!: any[];
 updatedData: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  // getAllDetails() {
  //   this.dataService.getAllDetails().subscribe(
  //     details => {
  //       this.detailsList = details;
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  // getDetailsById() {
  //   this.dataService.getDetailsById(this.userId).subscribe(
  //     detail => {
  //       this.selectedDetail = detail;
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  loadItems() {
    this.dataService.getItems().subscribe((data) => {
      console.log('Items loaded', data);
      this.items = data;
    });
  }

  deleteItem(id: number) {
    console.log('Delete button clicked', id);
    this.dataService.deleteItem(id).subscribe(() => {
      this.loadItems(); 
    });
  }

  updateItem(id: number, updatedData: any) {
    console.log('Update button clicked', id, updatedData);
    this.dataService.updateItem(id, updatedData).subscribe(() => {
      this.loadItems(); 
    });
  }

  patchItem(id: number, updatedData: any) {
    console.log('Patch button clicked', id, updatedData);
    this.dataService.patchItem(id, updatedData).subscribe(() => {
      this.loadItems(); 
    });
  }
}
 
