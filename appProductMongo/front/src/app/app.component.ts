import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faTrash = faTrash
  title = 'front';

  constructor(private crudService: CrudService){
  }

  ngOnInit(): void {
      this.crudService.getProducts().subscribe((res)=>{
        console.log(res);
      })
  }
}
