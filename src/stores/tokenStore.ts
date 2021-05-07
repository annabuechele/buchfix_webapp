import { observable, action, makeAutoObservable } from "mobx";
import { create, persist } from "mobx-persist";

export class TokenStore {
  @persist("object") @observable accessToken: string = "";
  @persist("object") @observable refreshToken: string = "";

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
export const tokenStore = new TokenStore();

hydrate("tokenStore", tokenStore);
