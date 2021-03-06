          import { BrowserModule } from '@angular/platform-browser';
          import { NgModule } from '@angular/core';

          import { AppRoutingModule } from './app-routing.module';
          import { AppComponent } from './app.component';
          import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
          import { LoginRegistorComponent } from './login-registor/login-registor.component';
          import {HttpClientModule} from '@angular/common/http'
          //UI components
          import {MatButtonModule} from '@angular/material/button';
          import {MatCardModule} from '@angular/material/card';
          import {MatTableModule} from '@angular/material/table';
          import {MatFormFieldModule} from '@angular/material/form-field'
          import{MatInputModule} from '@angular/material/input'
          import{MatCheckboxModule} from '@angular/material/checkbox'
          import {MatIconModule} from '@angular/material/icon'
          import { FormsModule } from '@angular/forms';
          import { DashboardComponent } from './dashboard/dashboard.component';
          
          import {MatDialogModule} from '@angular/material/dialog';
import { DialogProductComponent } from './dialog-product/dialog-product.component';


          @NgModule({
            declarations: [
              AppComponent,
              LoginRegistorComponent,
              DashboardComponent,
              DialogProductComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              FormsModule,
              MatButtonModule,
              MatCardModule,
              MatFormFieldModule,
              MatInputModule,
              MatCheckboxModule,
              MatTableModule,
              MatIconModule,
              MatDialogModule,
              HttpClientModule
            ],
            providers: [],
            bootstrap: [AppComponent],
          })
          export class AppModule { }
