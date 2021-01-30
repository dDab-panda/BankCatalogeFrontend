import { Component, OnInit } from '@angular/core'; 
import {HttpClient} from '@angular/common/http'; 
@Component({ 
  selector: 'app-show-api', 
  templateUrl: './show-api.component.html', 
  styleUrls: ['./show-api.component.css'] 
}) 
export class ShowApiComponent implements OnInit { 
  
  li:any; 
  bank_list=[]; 
  constructor(private http : HttpClient){ 
      
} 
  
  ngOnInit(): void { 
    this.http.get('https://fyle-backend-api.herokuapp.com/api/branches/autocomplete?q=RTGS&limit=40&offset=0') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      /*
      if(Response){   
        hideloader(); 
      } */
      console.log(Response) 
      this.li=Response; 
      this.bank_list=this.li;
    }); 
    /*
    function hideloader(){ 
      document.getElementById('loading').style.display = 'none';} */
  }} 