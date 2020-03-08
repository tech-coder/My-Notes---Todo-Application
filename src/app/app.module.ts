import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CompletedComponent } from './completed/completed.component';
import { ToBeDoneComponent } from './to-be-done/to-be-done.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    ToBeDoneComponent,
    ModalComponentComponent,
    FooterComponent,
  ],
  entryComponents:[
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,MatInputModule,
    MatFormFieldModule,
    MatListModule,MatFormFieldModule,
    MatButtonModule, MatCardModule,
    MatIconModule,MatGridListModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
