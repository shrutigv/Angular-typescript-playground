import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	private menuList: any[];
	private menu:string;

  constructor(private _itemService: ItemService) { 
  		this.menuList= _itemService.getMenus();
  }
  getItems(value:string){
  	this._itemService.refreshContent(value);
  }

  ngOnInit() {
  	this._itemService.currentMenu.subscribe(category => this.menu = category);
  }

}
