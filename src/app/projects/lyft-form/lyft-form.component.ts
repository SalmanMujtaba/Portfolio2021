import { Component } from '@angular/core';
import { Redirect } from './../../../services/redirect.service';

@Component({
  selector: '[app-lyft-form]',
  templateUrl: './lyft-form.component.html',
  styleUrls: ['./lyft-form.component.scss']
})
export class LyftFormComponent {

  constructor(public redirect: Redirect) {
  }

}
