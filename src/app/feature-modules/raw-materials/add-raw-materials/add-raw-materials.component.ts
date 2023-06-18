import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Prediction} from "../../model/prediction.model";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {PredictionService} from "../../service/prediction.service";
import {RawMaterials} from "../../model/raw-materials.model";
import {RawMaterialsService} from "../../service/raw-materials.service";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-raw-materials',
  templateUrl: './add-raw-materials.component.html',
  styleUrls: ['./add-raw-materials.component.scss']
})
export class AddRawMaterialsComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});
  submitted: boolean = false;
  rawMaterial = new RawMaterials();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private rawMaterialService: RawMaterialsService,
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
      rawMaterialName: [undefined, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")])],
      rawMaterialQuantity: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      rawMaterialPrice: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
      totalPriceOfRawMaterials: [undefined],
    });
  }

  onSubmit(formDetails: any) {
    this.submitted = true;
    if (this.formDetails.invalid){
      return;
    }

    this.rawMaterial.rawMaterialName = formDetails.rawMaterialName;
    this.rawMaterial.rawMaterialQuantity = formDetails.rawMaterialQuantity;
    this.rawMaterial.rawMaterialPrice = formDetails.rawMaterialPrice;
    this.rawMaterial.totalPriceOfRawMaterials = formDetails.totalPriceOfRawMaterials;

    if(this.formDetails.valid) {
      this.addRawMaterials(this.rawMaterial);
    }

    console.log('data::', this.formDetails.value);
    this.formDetails.reset();
  }

  addRawMaterials(rawMaterials: any){
    this.rawMaterialService.onAddRawMaterials(rawMaterials).subscribe(
      (response: any) => {
        console.log('data inserted succesfully');
        this.toastr.success('Raw Materials Add Successfully', 'Success');
        this.router.navigate(['/base/view-rawMaterials', response?.id]);
      },
      (error: any) => {
        console.log('error');
      }
    );
  }

  goBack(){
    // this.location.back();
    this.router.navigate(['/base/rawMaterials']);
  }

  calculate (val1:any, val2:any, val3:any) {
    this.formDetails.get(val3)?.patchValue(Number(this.formDetails.get(val1)?.value)* Number(this.formDetails.get(val2)?.value))

  }
}
