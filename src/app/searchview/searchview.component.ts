import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { Venue } from '../venue';
import {NewsearchService} from '../newsearch.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.css']
})
export class SearchviewComponent implements OnInit {
  bands:Band[] = [];
  venues:Venue[] = [];
  query:string = "";
  selectedOption = new FormControl('');

  searchAPI(){  //this is run on click of search button
    //need to learn advanced (reactive?) forms before can implement properly
    console.log("search Query: "+this.query);
    console.log("selected Option: : "+this.selectedOption.value);
    this.getBands();
// need to remove the aboe line - once it works
      if (this.selectedOption.value=="band"){
        console.log("getting bands");
        this.getBands();
      }
      else if (this.selectedOption.value == "vanue"){
        console.log("getting bands");
      }
      else{
        console.log("genre, data and error not implemented")
      }

  }



  getBands():void{
    this.searchService.getBands()
      .subscribe(bands => this.bands = bands);
  }
//do for venues!!


  //reconfig with a service
  constructor(private searchService: NewsearchService ) { }

  ngOnInit(): void {

  }

}
