import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  employeeForm: FormGroup;
  employeeList=[];

  constructor(private fb: FormBuilder, private service: CommonService) {
    
   }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      gender:['',Validators.required],
      address:['',Validators.required],
      dateOfBirth: ['',Validators.required],
      department:['',Validators.required]
    });
  }

  

  onSubmit(data){
    if(this.employeeForm.invalid){
      window.alert('please fill the required fields');
      return;
    }
    console.log(data);
    this.service.addEmployees(data).subscribe();
    window.alert('New Employee added Succesfully');
    this.employeeForm.reset();
    }
}
