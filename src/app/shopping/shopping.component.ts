import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {Cart,itemType} from '../item-type';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

	private items:itemType[];
	private total:number;
	 private subscription : Subscription;
  constructor(private _itemService: ItemService) {
    this.items= _itemService.items;
    this.total=this.items.length;
   }

  	ngOnInit() {
  		this.subscription=this._itemService.currentItem.subscribe((cart : Cart) => {
         this.total = cart.totalItem,
         this.items=cart.items;
    }); 
  }
}
