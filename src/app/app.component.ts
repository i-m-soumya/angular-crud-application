import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModalComponent } from './product-modal/product-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgCRUD';

  constructor(private dialog : MatDialog) {

  }
  openDialog() {
    this.dialog.open(ProductModalComponent, {
      width: '30%'
    });
  }
}

