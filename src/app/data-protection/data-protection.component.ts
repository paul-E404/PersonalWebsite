import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Globals } from '../globals';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  faTimes = faTimes;

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

}
