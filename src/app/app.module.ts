import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GoogleMapsModule } from "@angular/google-maps";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ScoreComponent } from "./score/score.component";
import { GooglemapComponent } from "./googlemap/googlemap.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ScoreComponent,
    GooglemapComponent,
    HeaderComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
