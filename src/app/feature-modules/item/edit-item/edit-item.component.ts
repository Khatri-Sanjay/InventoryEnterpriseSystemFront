import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {Item} from "../../model/item.model";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({})
  submitted: boolean = false;
  item = new Item();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.params.subscribe((res: any) => {
      this.getItemsDetailsById(res?.id);
    });
  }

  get form(): {[key: string]: AbstractControl}{
    return this.formDetails.controls;
  }

  initForm() {
    this.formDetails = this.formBuilder.group({
      itemName: [undefined, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")])],
      itemCategory: [undefined, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")])],
      itemPrice: [undefined, Validators.compose([Validators.required, Validators.pattern("^[1-9]*$"), Validators.minLength(2)])],
      itemQuantity: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
    });
  }

  getItemsDetailsById(itemId: number) {
    this.itemService.getItemsDetailsByItemId(itemId).subscribe({
      next: (response: any) => {
        this.item = response;
        this.formDetails.patchValue(response);
    }
    });
  }

  onSubmit() {
    this.itemService.editItemsDetailsByItemId(this.item.id, this.formDetails.value).subscribe({
      next: (value) => {
        this.onGoBack();
      }
    })
  }

  onGoBack() {
    this.location.back();
  }
}
