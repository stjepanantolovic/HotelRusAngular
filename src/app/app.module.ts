import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router"


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ProductRowComponent } from './table/product-row/product-row.component';
import { ProductService } from './table/product.service';
import { NewProductComponent } from './table/new-product/new-product.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RoomTypesComponent } from './room-types/room-types.component';

const appRoutes: Routes = [
  {path:'', component: HeaderComponent},
  {path:'products', component: TableComponent},
  {path:'roomTypes', component: RoomTypesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ProductRowComponent,
    CockpitComponent,
    NewProductComponent,
    DropdownDirective,
    RoomTypesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
