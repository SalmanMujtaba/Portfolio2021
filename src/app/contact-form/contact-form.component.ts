import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ContactService } from "./../../services/contact.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  public map: any = { lat: 43.6532, lng: -79.3832 };
  // 43.6532° N, 79.3832° W
  FormData: FormGroup;
  showProgressBar: boolean;
  hideProgressBarSecond: boolean;
  entryText: boolean = true;
  exitText: boolean;

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      message: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ]),
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
}
