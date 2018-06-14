import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Cart,itemType} from './item-type';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class ItemService {

	
	public items:itemType[]=[];
	public product:itemType[];
	private category = new BehaviorSubject<string>("Home");
  		currentMenu = this.category.asObservable();
  private itemCart= new Subject<Cart>();
  		currentItem=this.itemCart.asObservable();
  private itemList = new Subject<Array<itemType>>();
  		currentItemList = this.itemList.asObservable();

  constructor(private localStorage:LocalStorageService) {
  	this.product = localStorage.getProduct("Home");
  }

  
  addToCart(item){
   	this.items.push(item);
  	this.itemCart.next(<Cart>{totalItem: this.items.length, items: this.items});
  	this.localStorage.addCart(this.items);
  }
   
  removeProduct(id:string) {
    this.items = this.items.filter((items) =>  items.id !== id );
    this.itemCart.next(<Cart>{totalItem: this.items.length, items: this.items});
  }
   
  refreshContent(msg: string) {
  	this.category.next(msg);
   	this.itemList.next(this.localStorage.getProduct(msg));
  }

  
  getMenus(): any{
		return [{"value":"Home"}, {"value":"Women"} , {"value":"Men"},{"value": "Baby"}];
  }

}
