import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/model';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit{
  products:Product[]=[];
  skeletons:number[]=[...new Array(6)];
  error!:string;
  isLoading=false;
  images:string[]=[
    
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1690561566_Fresh_Deals_on_Atta_and_Flours_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1690405709_Month_End_Deals_On_Daily_Essentails_Desktop.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1690561220_bestsellingsmartphonesdesktop_D.jpg?im=Resize=(1680,320)",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1688753500_1680x320rounded.jpg?im=Resize=(1680,320)",

  ];

  constructor(private _productService:ProductService){
  }
  ngOnInit(): void {
   this.newArrivalProducts();
  }
  newArrivalProducts(){
    this.isLoading=true;
    const startIndex=Math.round(Math.random()*20);
    const lastIndex=startIndex+6;
    this._productService.get.subscribe(data=>{
      this.isLoading=false;
      this.products=data.slice(startIndex,lastIndex);
    },
    error=>this.error=error.message
    );
  }
}
