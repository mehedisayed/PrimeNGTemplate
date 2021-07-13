import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';

@Component({
  selector: 'app-raihan',
  templateUrl: './raihan.component.html',
  styleUrls: ['./raihan.component.scss'],
  animations: [
        trigger('errorState', [
            state('hidden', style({
                opacity: 0
            })),
            state('visible', style({
                opacity: 1
            })),
            transition('visible => hidden', animate('400ms ease-in')),
            transition('hidden => visible', animate('400ms ease-out'))
        ])
    ],
})
export class RaihanComponent implements OnInit {
  selectedValues: string[] = [];
  selectedValue: string;
checked: boolean;
chipsValues: string[];
  cities: City[];

    selectedCity: City;

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

  value1: number = 42723;

    value2: number = 58151;

    value3: number = 2351.35;

    value4: number = 50;

    value5: number = 151351;

    value6: number = 115744;

    value7: number = 635524;

    value8: number = 732762;

    value9: number = 1500;

    value10: number = 2500;

    value11: number = 4250;

    value12: number = 5002;

    value13: number = 20;

    value14: number = 50;

    value15: number = 10;

    value16: number = 20;

    value17: number = 20;

    value18: number = 10.50;

    value19: number = 25;

    value20: number = 50;

    blockSpecial: RegExp = /^[^<>*!]+$/ 
    
    blockSpace: RegExp = /[^\s]/; 
    
    ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; 
    
    cc: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
