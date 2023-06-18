import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RawMaterials} from "../../model/raw-materials.model";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {RawMaterialsService} from "../../service/raw-materials.service";

@Component({
  selector: 'app-edit-raw-material',
  templateUrl: './edit-raw-material.component.html',
  styleUrls: ['./edit-raw-material.component.scss']
})
export class EditRawMaterialComponent implements OnInit {


  formDetails: FormGroup = new FormGroup({});
  submitted: boolean = false;
  rawMaterial = new RawMaterials();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private rawMaterialService: RawMaterialsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.activateRoute.params.subscribe((res:any) => {
      this.getRawMaterialsDetailsByID(res?.id);
    });
  }

  getRawMaterialsDetailsByID(predictionId: number) {
    this.rawMaterialService.getRawMaterialsDetailsById(predictionId).subscribe({
      next: (response: any) => {
        this.rawMaterial = response;
        this.formDetails.patchValue(response);
      }
    });
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

  onSubmit() {
    this.rawMaterialService.editRawMaterialsDetailsById(this.rawMaterial.id, this.formDetails.value).subscribe({
      next: (value) => {
        // this.goBack();
        this.router.navigate(['/base/prediction-view', value?.id]);
      }
    })
  }

  goBack(){
    // this.location.back();
    this.router.navigate(['/base/rawMaterials']);
  }

  calculate (val1:any, val2:any, val3:any) {
    this.formDetails.get(val3)?.patchValue(Number(this.formDetails.get(val1)?.value)* Number(this.formDetails.get(val2)?.value))

  }

}
