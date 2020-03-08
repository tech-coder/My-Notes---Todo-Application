import { Component, OnInit } from '@angular/core';
export class DataModel{
  toDo : string;
  flag : boolean
}
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  item : string = null ;
  matRef : any;
  todoList = new Array(); 
   constructor() { }
 
   ngOnInit() {
     this.getTodos();
   }
   getTodos() {
     this.todoList.length =0;
     for (let index = 0; index <= localStorage.length; index++) {
       const key = localStorage.key(index);
       if(localStorage.getItem(key)=='enable')
       this.todoList.push(key);
     }
   }
   intervalId =setInterval(()=>{
     this.todoList.length =0;
     for (let index = 0; index <= localStorage.length; index++) {
       const key = localStorage.key(index);
       if(localStorage.getItem(key)=='enable')
       this.todoList.push(key);
     }
   },1000);
   RemoveAll(){
     localStorage.clear();
   }
   deleteTodo(todo){
     localStorage.removeItem(todo);
   }
}
