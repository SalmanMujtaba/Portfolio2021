import {
  ButtonsModule,
  CardsModule,
  CarouselModule,
  CollapseModule,
  IconsModule,
  InputUtilitiesModule,
  InputsModule,
  MDBSpinningPreloader,
  NavbarModule,
  TooltipModule,
  WavesModule
} from "ng-uikit-pro-standard";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AboutMeComponent } from "./about-me/about-me.component";
import { AlgoliaComponent } from './projects/algolia/algolia.component';
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactService } from "./../services/contact.service";
import { ExpensifyComponent } from "./projects/expensify/expensify.component";
import { FooterComponent } from "./footer/footer.component";
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from "./header/header.component";
// import { SmoothscrollModule, WavesModule } from 'ng-uikit-pro-standard'
import { HttpClientModule } from "@angular/common/http";
import { IconComponent } from './ui/icon/icon.component';
import { InterestComponent } from './interest/interest.component';
import { LyftFormComponent } from './projects/lyft-form/lyft-form.component';
import { LyricsAppComponent } from "./projects/lyrics-app/lyrics-app.component";
import { NodeChatAppComponent } from "./projects/node-chat-app/node-chat-app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { RecipeIngredientComponent } from "./projects/recipe-ingredient/recipe-ingredient.component";
import { Redirect } from "./../services/redirect.service";
import { SearchBasedComponent } from './projects/search-based/search-based.component';
import { SparkStreamingComponent } from "./projects/spark-streaming/spark-streaming.component";
import { StoriesComponent } from './stories/stories.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TicTacToeComponent } from './projects/tic-tac-toe/tic-tac-toe.component';
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
    TicTacToeComponent,
    AlgoliaComponent,
    LyftFormComponent,
    SearchBasedComponent,
    InterestComponent,
    IconComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
    CardsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    IconsModule,
    InputsModule.forRoot(),
    InputUtilitiesModule,
    NavbarModule,
    TooltipModule.forRoot(),
    WavesModule.forRoot(),
    GoogleMapsModule,
  ],
  providers: [MDBSpinningPreloader, Redirect, ContactService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
