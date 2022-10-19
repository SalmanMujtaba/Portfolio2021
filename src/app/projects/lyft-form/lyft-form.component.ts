import { Component, OnInit } from '@angular/core';

import { Redirect } from './../../../services/redirect.service';

@Component({
  selector: '[app-lyft-form]',
  templateUrl: './lyft-form.component.html',
  styleUrls: ['./lyft-form.component.scss']
})
export class LyftFormComponent implements OnInit {

  constructor(public redirect: Redirect) {
  }
  ngOnInit(): void {
  }

}
