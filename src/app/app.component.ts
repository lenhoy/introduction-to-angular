import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // #region Props
  title = 'fairhouse';
  selectedLocation: HousingLocation | undefined;

  housingLocationList: HousingLocation[] = 
  [
    {
      name: "Acme Fresh Start Housing",
      city: "Oslo",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Trondheim",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Bergen",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  //#endregion

  //#region methods

  //Gets the output from eventemitter
  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }

  //TODO: remove?
  //searchHousingLocations(){}

  //#endregion
  

}
