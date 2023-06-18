import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {Item} from "../../model/item.model";
import {Location} from "@angular/common";


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});
  submitted: boolean = false;
  item = new Item();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private itemService: ItemService
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
      itemCategory: [undefined, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")])],
      itemPrice: [undefined, Validators.compose([Validators.required, Validators.pattern("^[1-9]*$"), Validators.minLength(2)])],
      itemQuantity: [undefined, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"),])],
    });
  }

  onSubmit(formDetails: any) {
    this.submitted = true;
    if (this.formDetails.invalid){
      return;
    }

    this.item.itemName = formDetails.itemName;
    this.item.itemCategory = formDetails.itemCategory;
    this.item.itemPrice = formDetails.itemPrice;
    this.item.itemQuantity = formDetails.itemQuantity;

    if(this.formDetails.valid) {
      this.addItems(this.item);
    }

    console.log('data::', this.formDetails.value);
    this.formDetails.reset();
  }

  addItems(item: any){
    this.itemService.onAddItems(item).subscribe(
      (response: any) => {
        console.log('data inserted succesfully');
        this.router.navigate(['/base/item-list']);
      },
      (error: any) => {
        console.log('error');
      }
    );
  }

  onGoBack() {
    this.router.navigate(['/base/item-list']);
  }

}
