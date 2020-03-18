import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { ScoreComponent } from "./score/score.component";
import { GooglemapComponent } from "./googlemap/googlemap.component";
import { HeaderComponent } from "./header/header.component";
import { AboutusComponent } from "./aboutus/aboutus.component";

const routes: Routes = [
  { path: "", redirectTo: "/quiz", pathMatch: "full" },
  { path: "quiz", component: QuizComponent },
  { path: "scores", component: ScoreComponent },
  { path: "googlemap", component: GooglemapComponent },
  { path: "header", component: HeaderComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "**", component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
