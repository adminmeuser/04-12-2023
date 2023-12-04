import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss',
  
 
})
export class RecordComponent implements OnInit {
  createForm!: FormGroup;
  statusResponse: string = '';

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  // onSubmit() {
  //   const formData = this.createForm.value;
  //   this.dataService.saveRecord(formData).subscribe(
  //     response => {
  //       this.statusResponse = 'Record saved successfully.';
  //       console.log(response);
  //     },
  //     error => {
  //       this.statusResponse = 'Error saving record.';
  //       console.error(error);
  //     },

      
  //   )
  // }
}
 