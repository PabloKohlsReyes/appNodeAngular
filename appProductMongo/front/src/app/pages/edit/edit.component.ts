import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!:any
  model:Product

  constructor(private crudService:CrudService, private router: Router, 
    private activatedRouter: ActivatedRoute, private alertify:AlertifyService){

  }

  ngOnInit(): void {
      this.id = this.activatedRouter.snapshot.paramMap.get('id')
      this.crudService.getProduct(this.id).subscribe((res)=>{
        this.model={
          _id:res.id,
          description:res.description,
          stock:res.stock,
          price:res.price
        }
      })
  }
  onSubmit(product:Product){
    this.crudService.updateProduct(this.id,product).subscribe({
      next:()=>{
        this.alertify.success('Producto actualizado bien')
        this.router.navigateByUrl('/')
      },
      error:(error)=>{
        this.alertify.error(error)
      }
    })
  }

}
