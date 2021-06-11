import { observable, action, makeAutoObservable } from "mobx";
import { create, persist } from "mobx-persist";
import axios from "axios"

export class CartStore {
    @persist("object") @observable cart: Array<any> = [];

    @action addToCart: (book:any)=>void=(book)=>{
        this.cart.push(book);
    }

    @action removeCart: (book:any)=>void = (book )=>{
        const index = this.cart.indexOf(book);
        this.cart.splice(index, 1);
    }

    @action clearCart: ()=>void=()=>{
        this.cart = [];
    }


    constructor() {
        makeAutoObservable(this);
      }

} 

const hydrate = create();
export const cartStore = new CartStore();
//injected das ganze in localforage api
hydrate("cartStore", cartStore);
