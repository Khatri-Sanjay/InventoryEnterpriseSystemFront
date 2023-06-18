import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RawMaterialsService} from "../service/raw-materials.service";
import {RawMaterials} from "../model/raw-materials.model";

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {

  list: RawMaterials [] = [];

  constructor(
    private rawMaterialsService: RawMaterialsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPrediction();
  }

  getPrediction() {
    this.rawMaterialsService.listAllRawMaterials().subscribe((data : any) => {
      this.list = data.rawMaterials;
    });
  }

  onEdit(id: any) {
    this.router.navigate(['/base/edit-rawMaterials', id]);
  }

  onDelete(id: any) {
    this.rawMaterialsService.onDeleteRawMaterialsById(id).subscribe({
      next: (response: any) => {
        this.getPrediction();
        console.log('Delete successfully');
      },
      error: (error: any) => {
        console.log('Unable to Delete successfully');
      }
    })
  }

  onView(id: any){
    this.router.navigate(['/base/view-rawMaterials',id]);
  }


}
