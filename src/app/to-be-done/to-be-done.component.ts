import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-to-be-done',
  templateUrl: './to-be-done.component.html',
  styleUrls: ['./to-be-done.component.css']
})
export class ToBeDoneComponent implements OnInit {
  item : string = null ;
  todoList = new Array(); 
  matRef : any;
  constructor(public dialog : MatDialog) { }

  ngOnInit() {
    this.getTodos();
  }

  addNewTodo(){
    this.matRef =  this.dialog.open(ModalComponentComponent);
   this.matRef.afterClosed().subscribe(result =>{
     this.item = result;
     if(this.item){
     localStorage.setItem(this.item,'disable');
     }  
     this.getTodos();
   });
  }

  close_modal(){
  this.matRef.close();
  }
  somethingChange(event :any){
    if(event.option.selected)
    console.log(event.option.value);
    localStorage.setItem(event.option.value,'enable')
    setTimeout(() => {
      this.getTodos(); 
    },1000);
   
  }
  getTodos() {
    this.todoList.length =0;
    for (let index = 0; index <= localStorage.length; index++) {
      const key = localStorage.key(index);
      if(localStorage.getItem(key)=='disable')
      this.todoList.push(key);
    }


  }
}
