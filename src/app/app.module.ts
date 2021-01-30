import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http'; 
  
  
import { AppComponent } from './app.component'; 
import { ShowApiComponent } from './show-api/show-api.component'; 
  
@NgModule({ 
  declarations: [ 
    AppComponent, 
    ShowApiComponent 
  ], 
  imports: [ 
    BrowserModule, 
    HttpClientModule 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 