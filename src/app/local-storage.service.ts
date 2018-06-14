import { Injectable } from '@angular/core';

@Injectable()
export  class LocalStorageService {

  constructor() {
     let obj={
       "Home":  [
          {"id": "1","description":"Home dress","price":"23$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "2", "description":"Home New","price":"34$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "3", "description":"Home dress","price":"234$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          ],
        "Men":  [
          {"id": "1","description":"Men dress","price":"23$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "2", "description":"Men New","price":"34$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "3", "description":"Men dress","price":"234$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "4", "description":"Men dress","price":"235$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "5", "description":"Men dress","price":"23$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
           {"id": "6","description":"Men dress","price":"223$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "7","description":"Men dress","price":"423$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "8","description":"Men dress","price":"253$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
           ],
      "Baby":  [
          {"id": "1","description":"baby dress","price":"23$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "2", "description": "Baby New","price":"34$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "3", "description":"baby dress","price":"234$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "4", "description":"baby dress","price":"235$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "5", "description":"baby dress","price":"23$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
           {"id": "6","description":"baby dress","price":"223$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "7","description":"baby dress","price":"423$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "8","description":"baby dress","price":"253$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
         ],  

      "Women": [
          {"id": "1","description":"Women dress","price":"23$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "2", "description":"Women New","price":"34$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "3", "description":"Women dress","price":"234$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "4", "description":"Women dress","price":"235$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "5", "description":"Women dress","price":"23$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
           {"id": "6","description":"Women dress","price":"223$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/9801271_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
          {"id": "7","description":"Women dress","price":"423$","imgSrc":"https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/9801270_fpx.tif?wid=1200&qlt=90,0&layer=comp&op_sharpen=0&resMode=sharp2&op_usm=0.7,1.0,0.5,0&fmt=jpeg"},
            ] 

    }
    if (JSON.stringify(obj)) {
      localStorage.setItem('productData', JSON.stringify(obj));
    }

  }

  getProduct(key: any) {
    let obj=localStorage.getItem('productData') ? JSON.parse(localStorage.getItem('productData')) : null;

    return obj[key];
  }

  set(key:any, value:any) {
    const data = JSON.stringify(value);
    if (data) {
      localStorage.setItem(key, data);
    }
  }

  addCart(value){
    if(JSON.stringify(value))
      localStorage.setItem('cartItem', JSON.stringify(value));

  }

  clearAll() {
    localStorage.clear();
  }
}