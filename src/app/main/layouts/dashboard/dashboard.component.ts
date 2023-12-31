import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../../feature-modules/service/item.service";
import {Item} from "../../../feature-modules/model/item.model";
import {Prediction} from "../../../feature-modules/model/prediction.model";
import {PredictionService} from "../../../feature-modules/service/prediction.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: Item [] = [];
  prediction: Prediction [] = [];

  constructor(
    private itemService: ItemService,
    private predictionService: PredictionService
  ) { }

  ngOnInit(): void {
    this.itemService.listAllItems().subscribe((data : any) => {
      this.items = data.items;
    });
    this.predictionService.listAllPrediction().subscribe((data: any) => {
      this.prediction = data.prediction;
    })
  }

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 80, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 60]
      }
    ]
  };

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      console.log('handleChartRef', $chartRef);
      this.data.labels.push('August');
      this.data.datasets[0].data.push(60);
      this.data.datasets[1].data.push(20);
      setTimeout(() => {
        $chartRef?.update();
      }, 3000);
    }
  }
}
