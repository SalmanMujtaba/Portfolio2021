import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { ContactService } from "./../../services/contact.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  public map: any = { lat: 43.6532, lng: -79.3832 };
  // 43.6532° N, 79.3832° W
  FormData: FormGroup;
  showProgressBar: boolean;
  hideProgressBarSecond: boolean;
  entryText: boolean = true;
  markers: any[] = [];
  exitText: boolean;
  center: google.maps.LatLngLiteral;
  constructor(
    private builder: FormBuilder,
    private contactService: ContactService
  ) {
    this.center = {
      lat: 43.6532, lng: -79.3832,
    };
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      message: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(300),
      ]),
    });
    this.markers.push({
      position: {
        lat: 43.6532, lng: -79.3832
      },
      label: {
        color: '#1976d2',
        text: 'Toronto',
      },
      title: 'Toronto',
      options: { animation: google.maps.Animation.BOUNCE },
    });

  }

  onSubmit() {
    if (this.FormData.valid) {
      this.showProgressBar = true;
      setTimeout(() => {
        this.entryText = false;
        this.exitText = true;
      }, 1500);
      setTimeout(() => {
        this.FormData.reset();
        this.showProgressBar = false;
      }, 2000);
      this.contactService.sendMessage(this.FormData);
    }
  }

  get name() {
    return this.FormData.get("name");
  }

  get email() {
    return this.FormData.get("email");
  }

  get message() {
    return this.FormData.get("message");
  }
}
