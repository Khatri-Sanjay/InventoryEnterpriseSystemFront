import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './main/layouts/header/header.component';
import { SidebarComponent } from './main/layouts/sidebar/sidebar.component';
import { DashboardComponent } from './main/layouts/dashboard/dashboard.component';
import { BaseLayoutComponent } from './feature-modules/base-layout/base-layout.component';
import { FooterComponent } from './main/layouts/footer/footer.component';
import { AddItemComponent } from './feature-modules/item/add-item/add-item.component';
import { EditItemComponent } from './feature-modules/item/edit-item/edit-item.component';
import { ListItemComponent } from './feature-modules/item/list-item/list-item.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ChartjsComponent} from "@coreui/angular-chartjs";
import { PredictionComponent } from './feature-modules/prediction/prediction.component';
import { AddPredictionComponent } from './feature-modules/prediction/add-prediction/add-prediction.component';
import { ViewPredictionComponent } from './feature-modules/prediction/view-prediction/view-prediction.component';
import { CurrencyFormatterPipe } from './feature-modules/pipe/currency-formatter.pipe';
import { LoginComponent } from './feature-modules/auth/login/login.component';
import { RegisterComponent } from './feature-modules/auth/register/register.component';
import { EditPredictionComponent } from './feature-modules/prediction/edit-prediction/edit-prediction.component';
import { ViewItemComponent } from './feature-modules/item/view-item/view-item.component';
import { RawMaterialsComponent } from './feature-modules/raw-materials/raw-materials.component';
import { AddRawMaterialsComponent } from './feature-modules/raw-materials/add-raw-materials/add-raw-materials.component';
import { EditRawMaterialComponent } from './feature-modules/raw-materials/edit-raw-material/edit-raw-material.component';
import { ViewRawMaterialComponent } from './feature-modules/raw-materials/view-raw-material/view-raw-material.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    BaseLayoutComponent,
    FooterComponent,
    AddItemComponent,
    EditItemComponent,
    ListItemComponent,
    PredictionComponent,
    AddPredictionComponent,
    ViewPredictionComponent,
    CurrencyFormatterPipe,
    LoginComponent,
    RegisterComponent,
    EditPredictionComponent,
    ViewItemComponent,
    RawMaterialsComponent,
    AddRawMaterialsComponent,
    EditRawMaterialComponent,
    ViewRawMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartjsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
