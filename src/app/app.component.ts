import { Component, OnInit } from '@angular/core';
import { AutocompleteAddressPipe } from 'ngx-advanced-pipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AutocompleteAddressPipe]
})
export class AppComponent implements OnInit {
  title = 'ngx-pipes';

  addressAutocompleteData: any = {
    address_components: [
      { long_name: '4453', short_name: '4453', types: ['street_number'] },
      {
        long_name: 'Ashford Dunwoody Road Northeast',
        short_name: 'Ashford Dunwoody Rd NE',
        types: ['route']
      },
      {
        long_name: 'Perimeter Center',
        short_name: 'Perimeter Center',
        types: ['neighborhood', 'political']
      },
      {
        long_name: 'Atlanta',
        short_name: 'Atlanta',
        types: ['locality', 'political']
      },
      {
        long_name: 'DeKalb County',
        short_name: 'Dekalb County',
        types: ['administrative_area_level_2', 'political']
      },
      {
        long_name: 'Georgia',
        short_name: 'GA',
        types: ['administrative_area_level_1', 'political']
      },
      {
        long_name: 'United States',
        short_name: 'US',
        types: ['country', 'political']
      },
      { long_name: '30346', short_name: '30346', types: ['postal_code'] },
      { long_name: '1505', short_name: '1505', types: ['postal_code_suffix'] }
    ],
    adr_address:
      '<span class="street-address">4453 Ashford Dunwoody Rd NE</span>, <span class="locality">Atlanta</span>, <span class="region">GA</span> <span class="postal-code">30346-1505</span>, <span class="country-name">USA</span>',
    formatted_address: '4453 Ashford Dunwoody Rd NE, Atlanta, GA 30346, USA',
    geometry: {
      location: { lat: 33.9226408, lng: -84.33797700000002 },
      viewport: {
        south: 33.9213511197085,
        west: -84.33951193029151,
        north: 33.9240490802915,
        east: -84.33681396970849
      }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png',
    id: '1560a05c273ad1fabdd5d05e745b754c1a3ba859',
    name: '4453 Ashford Dunwoody Rd NE',
    place_id: 'ChIJz6UeUUMJ9YgR8E0S5apaJxA',
    reference: 'ChIJz6UeUUMJ9YgR8E0S5apaJxA',
    scope: 'GOOGLE',
    types: ['premise'],
    url:
      'https://maps.google.com/?q=4453+Ashford+Dunwoody+Rd+NE,+Atlanta,+GA+30346,+USA&ftid=0x88f50943511ea5cf:0x10275aaae5124df0',
    utc_offset: -300,
    vicinity: 'Atlanta',
    html_attributions: []
  };

  constructor(public AutocompleteAddress: AutocompleteAddressPipe) {}

  ngOnInit() {
    console.log(
      this.AutocompleteAddress.transform(this.addressAutocompleteData)
    );
  }
}
