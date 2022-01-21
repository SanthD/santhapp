import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private router : Router,private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  ans : any = [ "Yes", "No" ]

  country : any = [ "Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Republic of Korea", "Mexico", "Russia", "Saudi Arabia", "South Africa", "Turkey", "United Kingdom", "United States of America", "European Union" ]

  array : any = []

  studentForm = this.fb.group({
    businessName : [''],
    businessFirstName: [''],
    businessLastName: [''],
    businessEmail: [''],
    businessPhoneNumber: [''],
    businessClientStatus:[''],
    businessCountry:[''],
    expectedDate:[''],
    fXCompetitorName:[],
    businessAttachment1:[''],
    businessAttachment2:[''],
    additionalInformation:[''],
    terms:[''] 
  });

  onSubmit(){
    // this.array.push(value)
    this.router.navigate(['/sucess'])
    console.log("student Data...",this.studentForm)
  }

}
