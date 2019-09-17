import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data:string="Kishor zanjurne"

  data1:string="Kishor"

  dataDtails :any[]=[
    {name :'kishor', salary:50000, city:'Mumbai'},
    {name :'Priyanka', salary:50000, city:'Pune'},
    {name :'Snehal', salary:50000, city:'Pune'}
  ]

  dob =new Date(12,6,2001);


  employees:any=[]=[
    {id:1,name:"Kishor"},
    {id:2,name:"Priyanka"},
    {id:3,name:"Snehal"}
];
}
