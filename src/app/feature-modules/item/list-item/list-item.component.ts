import {Component, OnInit, Output} from '@angular/core';
import {Item} from "../../model/item.model";
import {ItemService} from "../../service/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  items: Item [] = [];

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.listAllItems().subscribe((data : any) => {
      this.items = data.items;
    });
  }

  onEdit(id: any) {
    this.router.navigate(['/base/item-edit', id]);
  }

  onDelete(id: any) {
    this.itemService.onDeleteItemsById(id).subscribe({
      next: (response: any) => {
        this.getItems();
        console.log('Delete successfully');
      },
      error: (error: any) => {
        console.log('Unable to Delete successfully');
    }
    })
  }

  onView(id: any) {
    this.router.navigate(['base/item-view',id]);
  }

  parseInt(data: any) {
    parseInt(data);
    return data;
  }
}
