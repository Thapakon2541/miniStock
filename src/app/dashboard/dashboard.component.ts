import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';

import {ProductService} from '../api/product.service';
import {Product} from '../api/product.model'
import {MatDialog} from '@angular/material/dialog'
import {DialogProductComponent} from '../dialog-product/dialog-product.component'
// export interface PeriodicElement {
//   name: string;
//   id: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
 
// ];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class DashboardComponent implements OnInit {
  
  
  products!: {} 
  constructor(private productService:ProductService,public dialog:MatDialog) { }

  openDialog(data:any){
   let dialog = this.dialog.open(DialogProductComponent,{
      width:'950px'
    })
    dialog.componentInstance.product = data;
    const sub = dialog.componentInstance.products.subscribe((data:any)=>{
      debugger
      console.log(data)
    })

  console.log(data)
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data:{})=>{
        console.log(data)
        this.products = data
        
    })
  }
}
