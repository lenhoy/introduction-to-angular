import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location'; // Data type interface

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.searchHousingLocations("");
  }

  // IO
  @Input() locationList: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  // Result list from filtering
  resultList: HousingLocation[] = [];

  // Search button and filtering
  searchHousingLocations(searchText: string){
    // Don't filter if searchText is blank
    if (!searchText) this.resultList = this.locationList;

    // TODO: remove 
    console.log(searchText);

    // Filter resultList on matching city
    this.resultList = this.locationList.filter(
      (location: HousingLocation)  => location.city
      .toLowerCase()
      .includes(
        searchText.toLowerCase()
      )
    );
  }

  // Select Location click 
  selectLocation(location: HousingLocation){
    console.log(location.name); //TODO: remove
    return this.locationSelectedEvent.emit(location);
  }

}
