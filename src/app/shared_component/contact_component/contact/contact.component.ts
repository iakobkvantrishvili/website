import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:Contact=new Contact()

  constructor() { }

  ngOnInit(): void {
  }
  SaveInfo(){
  console.log(this.contact);
  this.contact=new Contact();
  }
  
  
  }
 

