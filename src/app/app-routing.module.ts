import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { ScoreComponent } from "./score/score.component";
import { GooglemapComponent } from "./googlemap/googlemap.component";

const routes: Routes = [
  { path: "", redirectTo: "/quiz", pathMatch: "full" },
  { path: "quiz", component: QuizComponent },
  { path: "scores", component: ScoreComponent },
  { path: "googlemap", component: GooglemapComponent },
  { path: "**", component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
