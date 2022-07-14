import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location'; // Data type interface

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() locationList: HousingLocation[] = [];

  // Click handler
  searchHousingLocations(searchText: string){
    console.log(searchText);
  }

}
