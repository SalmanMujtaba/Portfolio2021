import { AgmCoreModule } from "@agm/core";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
// import { TooltipModule, ButtonsModule, WavesModule } from 'ng-uikit-pro-standard'
// import { SmoothscrollModule, WavesModule } from 'ng-uikit-pro-standard'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MDBBootstrapModulesPro,
  MDBSpinningPreloader,
  ToastModule,
} from "ng-uikit-pro-standard";
import { ContactService } from "./../services/contact.service";
import { Redirect } from "./../services/redirect.service";
import { AboutMeComponent } from "./about-me/about-me.component";
// import { AngularFormComponent } from "./angular-form/angular-form.component";
import { AppComponent } from "./app.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AngularFormComponent } from "./projects/angular-form/angular-form.component";
import { ExpensifyComponent } from "./projects/expensify/expensify.component";
import { GameComponent } from "./projects/game/game.component";
import { LyricsAppComponent } from "./projects/lyrics-app/lyrics-app.component";
import { NodeChatAppComponent } from "./projects/node-chat-app/node-chat-app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { RecipeIngredientComponent } from "./projects/recipe-ingredient/recipe-ingredient.component";
import { SparkStreamingComponent } from "./projects/spark-streaming/spark-streaming.component";
import { TripManagerComponent } from "./projects/trip-manager/trip-manager.component";
import { StoriesComponent } from './stories/stories.component';

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
    AngularFormComponent,
    FooterComponent,
    GameComponent,
    ContactFormComponent,
    StoriesComponent,
    // AngularFormComponent,
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
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: "AIzaSyA8i7AGR1UtH1n9iUyHcVC-qqZ8NzVcpYQ",
    }),
  ],
  providers: [MDBSpinningPreloader, Redirect, ContactService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
