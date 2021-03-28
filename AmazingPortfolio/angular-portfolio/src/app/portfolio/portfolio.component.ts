import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PortfolioDetails } from '../portfolio.details';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  portfolioRef = new FormGroup({
    contactname:new FormControl(),
    phoneno:new FormControl()
    });

    portfoliodetails: Array<PortfolioDetails> = new Array();

  
    msg:string="";


  constructor(){}
  
  ngOnInit(): void {
  }

  contactInfo()
  {
    console.log(this.portfolioRef.value); // all value
    let contactname = this.portfolioRef.get("contactname")?.value; // get specific control value
    let phoneno = this.portfolioRef.get("phoneno")?.value;

    console.log(this.portfolioRef);
    //console.log(phoneno);
    console.log("Your Contact Details are Saved Succesfully..!!");
    this.msg = "Contact Details are successfully saved !";

    let cname = new PortfolioDetails(contactname,phoneno);
    this.portfoliodetails.push(cname);
  }

}
