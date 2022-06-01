import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';



@NgModule({
  declarations: [
    AlertComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  
    exports:[
    AlertComponent,
    HeaderComponent,
    FooterComponent

    ]
  
})
export class SharedModule { }
