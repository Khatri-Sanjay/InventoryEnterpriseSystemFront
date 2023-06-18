import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  itemDetails: any;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getItemDetailsByItemId(res?.id);
    });
  }

  getItemDetailsByItemId(itemId: number) {
    this.itemService.getItemsDetailsByItemId(itemId).subscribe({
      next: (response: any) => {
        this.itemDetails = response;
        console.log(this.itemDetails)

        console.log("Res:" , response)
      }
    });
  }

  onGoback(){
    this.location.back();
  }

  parseInt(data: any) {
    parseInt(data);
    return data;
  }

}
