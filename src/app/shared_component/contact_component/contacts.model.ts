export class Contact{
    FirstName:string;
    LastName:string;
    Email:string;
    Website:string;
    Listening:string;
    constructor(firstname:string='',lastname:string='',email:string='',website:string='',listening:string=''){
    this.FirstName=firstname;
    this.LastName=lastname;
    this.Email=email;
    this.Website=website;
    this.Listening=listening; 
    }
}