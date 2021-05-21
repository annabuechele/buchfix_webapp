import { observable, action, makeAutoObservable } from "mobx";
import { create, persist } from "mobx-persist";

export class AuthStore {

  @persist("object") @observable user: any = null;

  @action setUser: (user: any) => void = (user) => {
    this.user = user;
  };
  @action logOut: () => void = () => {
    this.user = null;
  };
  constructor() {
    makeAutoObservable(this);
  }
}
const hydrate = create();
export const authStore = new AuthStore();
//injected das ganze in localforage api
hydrate("authStore", authStore);
