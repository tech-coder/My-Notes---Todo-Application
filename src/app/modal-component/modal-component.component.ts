import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CompletedComponent } from '../completed/completed.component';


export interface appData{
item : string ;
}
@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})


export class ModalComponentComponent implements OnInit {
item : string 
  constructor(@Inject(MAT_DIALOG_DATA) public data : appData ) { }

  ngOnInit() {
  }
  close_modal(){

    }
}
