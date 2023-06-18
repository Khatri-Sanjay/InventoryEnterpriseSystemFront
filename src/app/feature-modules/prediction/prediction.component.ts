import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PredictionService} from "../service/prediction.service";
import {Prediction} from "../model/prediction.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  list: Prediction [] = [];

  constructor(
    private predictionService: PredictionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPrediction();
  }

  getPrediction() {
    this.predictionService.listAllPrediction().subscribe((data : any) => {
      this.list = data.prediction;
    });
  }

  onEdit(id: any) {
    this.router.navigate(['/base/prediction-edit', id]);
  }

  onDelete(id: any) {
    this.predictionService.onDeletePredictionById(id).subscribe({
      next: (response: any) => {
        this.getPrediction();
        console.log('Delete successfully');
      },
      error: (error: any) => {
        console.log('Unable to Delete successfully');
      }
    })
  }

  onView(id: any){
    this.router.navigate(['/base/prediction-view',id]);
  }


}
