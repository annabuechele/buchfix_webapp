import { observable, action, makeAutoObservable } from "mobx";
import { create, persist } from "mobx-persist";
import axios from "axios"

export class AuthStore {

  @persist("object") @observable user: any = null;
  @persist("object") @observable accessToken: string = "";
  @persist("object") @observable refreshToken: string = "";

  @action setUser: (user: any) => void = (user) => {
    this.user = user;
  };
  @action logOut: () => void = async() => { //um await wird async benötigt
    this.user = null; //await warten auf funktion bis sie fertig ausgeführt ist
    await axios.post(process.env.REACT_APP_AUTH_URL + "/authenticate/logout", {refreshToken:this.refreshToken}).catch((err)=>{
      console.log(err);
    })
  };


  @action setAccessToken: (token: string) => void = (token) => {
    this.accessToken = token;
  };
  @action setRefreshToken: (token: string) => void = (token) => {
    this.refreshToken = token;
  };
  constructor() {
    makeAutoObservable(this);
  }
}
const hydrate = create();
export const authStore = new AuthStore();
//injected das ganze in localforage api
hydrate("authStore", authStore);
