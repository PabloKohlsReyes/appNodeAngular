import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { Product } from 'src/app/models/product.interface';
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

  constructor(private crudService: CrudService){

  }

  ngOnInit(): void {
      this.crudService.getProducts().subscribe((res:Product[])=>{
        // console.log(res);
        this.products = res;
      })
  }
  delete(id:any,index:any){
    console.log(id);
  }
}
