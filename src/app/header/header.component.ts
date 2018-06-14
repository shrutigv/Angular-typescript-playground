import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {Cart,itemType} from '../item-type';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private items:itemType[];
	private total:number;

  constructor(private _itemService: ItemService) {
   }

  ngOnInit() {
  	this._itemService.currentItem.subscribe((cart : Cart) => {
  	  this.total = cart.totalItem;
    });
  }
  
  
}
