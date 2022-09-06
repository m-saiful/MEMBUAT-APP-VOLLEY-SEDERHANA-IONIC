import { Component } from '@angular/core';
import {MATCH} from '../../assets/data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  public match = MATCH;

}
