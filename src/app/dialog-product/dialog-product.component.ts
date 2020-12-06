import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {ProductService} from '../api/product.service';
@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss']
})
export class DialogProductComponent implements OnInit {
  product = {
    name:'',
    price:''
  }
  constructor(private productService:ProductService) { }
  @Output() products = new EventEmitter();
  ngOnInit(): void {
  }

  save(){
    this.productService.save(this.product).subscribe(res=>{
      this.products.emit(res);
    })
    
  }
}
