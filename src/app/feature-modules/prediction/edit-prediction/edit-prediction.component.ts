import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Prediction} from "../../model/prediction.model";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {PredictionService} from "../../service/prediction.service";

@Component({
  selector: 'app-edit-prediction',
  templateUrl: './edit-prediction.component.html',
  styleUrls: ['./edit-prediction.component.scss']
})
export class EditPredictionComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});
  submitted: boolean = false;
  prediction = new Prediction();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private predictionService: PredictionService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.activateRoute.params.subscribe((res:any) => {
      this.getPredictionDetailsByID(res?.id);
    });
  }

  get form(): {[key: string]: AbstractControl}{
    return this.formDetails.controls;
  }

  initForm() {
    this.formDetails = this.formBuilder.group({
      itemName: [undefined, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")])],
      qtyOfRawMaterials: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      priceOfRawMaterials: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      totalPriceOfRawMaterials: [undefined],
      labourCost: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      marketingCost: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      shippingCost: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      packagingCost: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      miscellaneousCost: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      qtyOfProduct: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      profitMargin: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],

    });
  }

  getPredictionDetailsByID(predictionId: number) {
    this.predictionService.getPredictionDetailsByItemId(predictionId).subscribe({
      next: (response: any) => {
        this.prediction = response;
        this.formDetails.patchValue(response);
      }
    });
  }


  onSubmit() {
    this.predictionService.editPredictionDetailsByItemId(this.prediction.id, this.formDetails.value).subscribe({
      next: (value) => {
        // this.goBack();
        this.router.navigate(['/base/prediction-view', value?.id]);
      }
    })
  }

  goBack(){
    // this.location.back();
    this.router.navigate(['/base/prediction']);
  }

  calculate (val1:any, val2:any, val3:any) {
    this.formDetails.get(val3)?.patchValue(Number(this.formDetails.get(val1)?.value)* Number(this.formDetails.get(val2)?.value))

  }

}
