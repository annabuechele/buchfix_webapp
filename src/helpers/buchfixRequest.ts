import axios, { AxiosRequestConfig } from "axios";
import { authStore } from "../stores/authStore";


const getNewAccessToken: (refreshToken: string) => any = async (
  refreshToken
) => {
  const tokenResponse: any = await axios
    .post(process.env.REACT_APP_AUTH_URL + "/authenticate/token", {
      refreshToken: refreshToken,
    })
    .catch((err) => {
      throw new Error(err);
    });

  if (!tokenResponse)
    throw new Error(
      "Error: You didn't get a token back, probably a error with that lol"
    );

  return tokenResponse.data.accessToken;
};

class BetterRequests {
  /**
   * @param {url} URL           URL to your endpoint.
   * @param {config}           AxiosConfig Your Request config
   */
  public get: (
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<any> = async (url, config) => {
    if (!config) config = {};
    if (!config.headers) {
      config.headers = {
        authorization: `BEARER ${authStore.accessToken}`,
      };
    } else {
      config.headers.authorization = `BEARER ${authStore.accessToken}`;
    }
    
    let request = await axios.get(url, config).catch(async (err) => {
      if(err){
       
        const refreshData = await getNewAccessToken(authStore.refreshToken);
        authStore.setAccessToken(refreshData);
        if (!config) config = {};
        config.headers.authorization = `BEARER ${refreshData}`;

        return await axios.get(url, config).catch((err) => {
          throw new Error(err);
        });
      
    }
     
    });

    return request;
  };
  /**
   * @param {url} URL           URL to your endpoint.
   * @param {config}           AxiosRequestConfig Your Request config
   *  @param {data}           PostRequestData The Data that you want to send to your endpoint.
   */
  public post: (
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ) => Promise<any> = async (url, data, config) => {
    if (!config) config = {};
    if (!config.headers) {
      config.headers = {
        authorization: `BEARER ${authStore.accessToken}`,
      };
    } else {
      config.headers.authorization = `BEARER ${authStore.accessToken}`;
    }

    let request = await axios.post(url, data, config).catch(async (err) => {
      
      if(err){
       
          const refreshData = await getNewAccessToken(authStore.refreshToken);
          authStore.setAccessToken(refreshData);
          if (!config) config = {};
          config.headers.authorization = `BEARER ${refreshData}`;
          
  
          return await axios.post(url, data, config).catch((err) => {
            throw new Error(err);
          });
        
      }
    });
    return request;
  };

  /**
   * @param {url} URL           URL to your endpoint.
   * @param {config}           AxiosRequestConfig Your Request config
   */
  public delete: (
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<any> = async (url,  config) => {
    if (!config) config = {};
    if (!config.headers) {
      config.headers = {
        authorization: `BEARER ${authStore.accessToken}`,
      };
    } else {
      config.headers.authorization = `BEARER ${authStore.accessToken}`;
    }

    let request = await axios.delete(url, config).catch(async (err) => {
      if(err){
       
        const refreshData = await getNewAccessToken(authStore.refreshToken);
        authStore.setAccessToken(refreshData);
        if (!config) config = {};
        config.headers.authorization = `BEARER ${refreshData}`;

        return await axios.delete(url, config).catch((err) => {
          throw new Error(err);
        });
      
    }
    });

    return request;
  };
  /**
   * @param {url} URL           URL to your endpoint.
   * @param {config}           AxiosRequestConfig Your Request config
   */
  public patch: (
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ) => Promise<any> = async (url, data, config) => {
    if (!config) config = {};
    if (!config.headers) {
      config.headers = {
        authorization: `BEARER ${authStore.accessToken}`,
      };
    } else {
      config.headers.authorization = `BEARER ${authStore.accessToken}`;
    }

    let request = await axios.patch(url, data, config).catch(async (err) => {
      if(err){
       
        const refreshData = await getNewAccessToken(authStore.refreshToken);
        authStore.setAccessToken(refreshData);
        if (!config) config = {};
        config.headers.authorization = `BEARER ${refreshData}`;

        return await axios.patch(url, config).catch((err) => {
          throw new Error(err);
        });
      
    }
    });

    return request;
  };
}

export const betterRequests = new BetterRequests();
