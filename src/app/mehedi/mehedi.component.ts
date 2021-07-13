import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mehedi',
  templateUrl: './mehedi.component.html',
  styleUrls: ['./mehedi.component.scss'],
})
export class MehediComponent implements OnInit {
  password: string;
  ratingValue: number = 3;

  constructor() {}

  ngOnInit(): void {}
}
