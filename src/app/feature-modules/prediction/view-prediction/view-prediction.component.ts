import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {PredictionService} from "../../service/prediction.service";

@Component({
  selector: 'app-view-prediction',
  templateUrl: './view-prediction.component.html',
  styleUrls: ['./view-prediction.component.scss']
})
export class ViewPredictionComponent implements OnInit {

  predictionDetails: any;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private predictionService: PredictionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getPredictionDetailsByPredictionId(res?.id);
    });
  }

  getPredictionDetailsByPredictionId(id: number) {
    this.predictionService.getPredictionDetailsByItemId(id).subscribe({
      next: (response: any) => {
        this.predictionDetails = response;
        console.log(this.predictionDetails)

        console.log("Res:" , response)
      }
    });
  }

  onGoback(){
    this.location.back();
  }

}
