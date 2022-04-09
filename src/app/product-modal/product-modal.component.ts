import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  productName: string = ""
  productCategory: string = ""
  productIsAvailable: string = ""
  productDescription : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitProductCreate(addProductFormData : NgForm) {
    console.log(addProductFormData)
  }
  categories: String[] = [ 'Electronics', 'Foods', 'Household', 'Drinks'];

}
