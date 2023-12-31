import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private router: Router, private crudService: CrudService,private alertify:AlertifyService){

  }

  onSubmit(product: Product){
    // console.log(product);
    this.crudService.createProducts(product).subscribe({
      next:()=>{
        this.alertify.success('Producto creado bien')
        this.router.navigateByUrl("/")
      },
      error: (error)=>{
        this.alertify.error(error)
      }
    })
  }

}
