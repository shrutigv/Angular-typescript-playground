import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {itemType} from '../item-type';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  	private itemsList: itemType[];
	private menu : string;

  	constructor(private _itemService: ItemService ) { 
  		this.itemsList= _itemService.product;
	}
	ngOnInit() {
		this._itemService.currentMenu.subscribe(category => this.menu = category);
		this._itemService.currentItemList.subscribe(itemList => this.itemsList = itemList);
	}
  	
	addCart(item:any): any {
		this._itemService.addToCart(item);
  	}

}
