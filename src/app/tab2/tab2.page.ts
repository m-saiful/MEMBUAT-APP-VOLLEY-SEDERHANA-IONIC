import { Component } from '@angular/core';
import {LEAGUE} from '../../assets/data2';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public league = LEAGUE;

  constructor() {}

}



