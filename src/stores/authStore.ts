import { observable, action, makeAutoObservable } from "mobx";
import { create, persist } from "mobx-persist";

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
}
const hydrate = create();
export const authStore = new AuthStore();
//injected das ganze in localforage api
hydrate("authStore", authStore);
