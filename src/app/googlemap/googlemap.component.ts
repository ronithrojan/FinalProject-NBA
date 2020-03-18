import { Component, OnInit } from "@angular/core";
import { TriviaquizService } from "../triviaquiz.service";
import { Score } from "../interfaces/score";

@Component({
  selector: "app-googlemap",
  templateUrl: "./googlemap.component.html",
  styleUrls: ["./googlemap.component.css"]
})
export class GooglemapComponent implements OnInit {
  markers: any[] = [];
  scores: any;
  center: any = new google.maps.LatLng({
    lat: 42.33596,
    lng: -83.04975
  });
  zoom = 10;
  constructor(private service: TriviaquizService) {}

  ngOnInit(): void {
    this.getScores();
  }

  getScores() {
    this.service.getScores().subscribe(response => {
      this.scores = response;
      console.log(this.scores);
      this.scores.forEach(score => {
        let marker: any = {};
        this.service
          .getLatLng({ city: score.city, state: score.state })
          .subscribe(response => {
            console.log(response);
            let coordinate: any = response;
            marker.position = new google.maps.LatLng({
              lat: coordinate.results[0].geometry.location.lat,
              lng: coordinate.results[0].geometry.location.lng
            });
            this.markers.push(marker);
          });
      });
    });
  }
}
