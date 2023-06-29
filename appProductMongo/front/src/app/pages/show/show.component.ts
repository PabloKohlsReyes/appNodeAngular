import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { Product } from 'src/app/models/product.interface';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{

  faCirclePlus = faCirclePlus
  faPen = faPen
  faTrash = faTrash

  products: Product[]=[]

  constructor(private crudService: CrudService, private alertify:AlertifyService){

  }

  ngOnInit(): void {
      this.crudService.getProducts().subscribe((res:Product[])=>{
        // console.log(res);
        this.products = res;
      })
  }
  delete(id:any,index:any){
    this.alertify.confirm({
      message:"Estas seguro?",
      callback_delete:()=>{
        this.crudService.deleteProduct(id).subscribe((res)=>{
          this.products.splice(index,1)
        })
      }
    })
  
  }
}
