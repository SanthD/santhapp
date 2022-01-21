import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-page',
  templateUrl: './sucess-page.component.html',
  styleUrls: ['./sucess-page.component.css']
})
export class SucessPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ref_id : number = Math.round((Math.random()*10000000000));

}
