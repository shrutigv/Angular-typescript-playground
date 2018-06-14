export class itemType {
 	id:string;
 	description:string;
 	imgSrc:string;
 	price:string;
}
export interface Cart{
	items: itemType[];
	totalItem: number;
	id: string;
}
export interface User {
 	emailId: string;
 	id: string;
    pwd:  string;
}
export interface UserCart{
	userId: User;
	cartId:Cart;
}
