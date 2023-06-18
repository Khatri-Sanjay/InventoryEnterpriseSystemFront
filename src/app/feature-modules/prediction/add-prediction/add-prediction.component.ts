import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {Item} from "../../model/item.model";
import {Prediction} from "../../model/prediction.model";
import {PredictionService} from "../../service/prediction.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-prediction',
  templateUrl: './add-prediction.component.html',
  styleUrls: ['./add-prediction.component.scss']
})
export class AddPredictionComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});
  submitted: boolean = false;
  prediction = new Prediction();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private predictionService: PredictionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
   this.initForm();
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

  onSubmit(formDetails: any) {
    this.submitted = true;
    if (this.formDetails.invalid){
      return;
    }

    this.prediction.itemName = formDetails.itemName;
    this.prediction.qtyOfRawMaterials = formDetails.qtyOfRawMaterials;
    this.prediction.priceOfRawMaterials = formDetails.priceOfRawMaterials;
    this.prediction.totalPriceOfRawMaterials = formDetails.totalPriceOfRawMaterials;
    this.prediction.labourCost = formDetails.labourCost;
    this.prediction.marketingCost = formDetails.marketingCost;
    this.prediction.shippingCost = formDetails.shippingCost;
    this.prediction.packagingCost = formDetails.packagingCost;
    this.prediction.miscellaneousCost = formDetails.miscellaneousCost;
    this.prediction.qtyOfProduct = formDetails.qtyOfProduct;
    this.prediction.profitMargin = formDetails.profitMargin;


    if(this.formDetails.valid) {
      this.addPrediction(this.prediction);
    }

    console.log('data::', this.formDetails.value);
    this.formDetails.reset();
  }

  addPrediction(prediction: any){
    this.predictionService.onAddPrediction(prediction).subscribe(
      (response: any) => {
        console.log('data inserted succesfully');
        this.toastr.success('Prediction Done Successfully', 'Success!');
        this.router.navigate(['/base/prediction-view', response?.id]);
      },
      (error: any) => {
        console.log('error');
      }
    );
  }

  goBack(){
    // this.location.back();
    this.router.navigate(['/base/prediction']);
  }

  calculate (val1:any, val2:any, val3:any) {
    this.formDetails.get(val3)?.patchValue(Number(this.formDetails.get(val1)?.value)* Number(this.formDetails.get(val2)?.value))

  }


}
