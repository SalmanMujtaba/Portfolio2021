import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MDBBootstrapModulesPro,
  MDBSpinningPreloader,
  ToastModule
} from "ng-uikit-pro-standard";

import { AboutMeComponent } from "./about-me/about-me.component";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactService } from "./../services/contact.service";
import { ExpensifyComponent } from "./projects/expensify/expensify.component";
import { FooterComponent } from "./footer/footer.component";
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from "./header/header.component";
// import { TooltipModule, ButtonsModule, WavesModule } from 'ng-uikit-pro-standard'
// import { SmoothscrollModule, WavesModule } from 'ng-uikit-pro-standard'
import { HttpClientModule } from "@angular/common/http";
import { LyricsAppComponent } from "./projects/lyrics-app/lyrics-app.component";
import { NodeChatAppComponent } from "./projects/node-chat-app/node-chat-app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { RecipeIngredientComponent } from "./projects/recipe-ingredient/recipe-ingredient.component";
import { Redirect } from "./../services/redirect.service";
import { SparkStreamingComponent } from "./projects/spark-streaming/spark-streaming.component";
import { StoriesComponent } from './stories/stories.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TripManagerComponent } from "./projects/trip-manager/trip-manager.component";
import { YashaComponent } from './yasha/yasha.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    RecipeIngredientComponent,
    SparkStreamingComponent,
    TripManagerComponent,
    NodeChatAppComponent,
    LyricsAppComponent,
    ExpensifyComponent,
    FooterComponent,
    ContactFormComponent,
    StoriesComponent,
    TestimonialsComponent,
    YashaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    GoogleMapsModule,
  ],
  providers: [MDBSpinningPreloader, Redirect, ContactService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
