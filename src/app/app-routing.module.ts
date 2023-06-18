import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./main/layouts/header/header.component";
import {DashboardComponent} from "./main/layouts/dashboard/dashboard.component";
import {BaseLayoutComponent} from "./feature-modules/base-layout/base-layout.component";
import {ListItemComponent} from "./feature-modules/item/list-item/list-item.component";
import {AddItemComponent} from "./feature-modules/item/add-item/add-item.component";
import {EditItemComponent} from "./feature-modules/item/edit-item/edit-item.component";
import {PredictionComponent} from "./feature-modules/prediction/prediction.component";
import {AddPredictionComponent} from "./feature-modules/prediction/add-prediction/add-prediction.component";
import {ViewPredictionComponent} from "./feature-modules/prediction/view-prediction/view-prediction.component";
import {LoginComponent} from "./feature-modules/auth/login/login.component";
import {EditPredictionComponent} from "./feature-modules/prediction/edit-prediction/edit-prediction.component";
import {ViewItemComponent} from "./feature-modules/item/view-item/view-item.component";
import {RegisterComponent} from "./feature-modules/auth/register/register.component";
import {AuthGuard} from "./feature-modules/auth/auth.guard";
import {RawMaterials} from "./feature-modules/model/raw-materials.model";
import {RawMaterialsComponent} from "./feature-modules/raw-materials/raw-materials.component";
import {AddRawMaterialsComponent} from "./feature-modules/raw-materials/add-raw-materials/add-raw-materials.component";
import {ViewRawMaterialComponent} from "./feature-modules/raw-materials/view-raw-material/view-raw-material.component";
import {EditRawMaterialComponent} from "./feature-modules/raw-materials/edit-raw-material/edit-raw-material.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'base', component: BaseLayoutComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        children: [{
          path: 'item-list', component: ListItemComponent
        }]
      },
      {path: 'item-list', component: ListItemComponent},
      {path: 'item-add', component: AddItemComponent},
      {path: 'item-edit/:id', component: EditItemComponent},
      {path: 'item-view/:id', component: ViewItemComponent},
      {path: 'prediction', component: PredictionComponent},
      {path: 'prediction-add', component: AddPredictionComponent},
      {path: 'prediction-view', component: ViewPredictionComponent},
      {path: 'prediction-edit/:id', component: EditPredictionComponent},
      {path: 'prediction-view/:id', component: ViewPredictionComponent},
      {path: 'rawMaterials', component: RawMaterialsComponent},
      {path: 'add-rawMaterials', component: AddRawMaterialsComponent},
      {path: 'view-rawMaterials/:id', component: ViewRawMaterialComponent},
      {path: 'edit-rawMaterials/:id', component: EditRawMaterialComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
