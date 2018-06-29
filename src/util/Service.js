import Connectivity from "./Connectivity";
import ServiceError from "../models/errors/ServiceError";
import BusinessError from "../models/errors/BusinessError";
import UnauthorizedError from "../models/errors/UnauthorizedError";
import BadRequestError from "../models/errors/BadRequestError";
import ForbiddenError from "../models/errors/ForbiddenError";

/**
 * Classe que encapsula as chamadas aos servicos
 */
export default class Service {
  axios;
  connectivity;

  constructor(axios) {
    this.axios = axios;
    this.connectivity = new Connectivity();
  }

  preMiddleware = async () => {
    await this.connectivity.checkIsConnected();
  };

  posMiddleware = () => {};

  getHeadersRest = () => {
    return {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
  };

  post = async (url, params, headers) => {
    return this.doRequest("post", url, params, headers);
  };

  get = async (url, params, headers) => {
    return this.doRequest("get", url, params, headers);
  };

  doRequest = async (method, url, params, headers) => {
    await this.preMiddleware();

    let data = {};

    data = await this.axiosService(method, url, params, headers);

    this.posMiddleware();

    return data;
  };

  axiosService = async (method, url, params, headers) => {
    let _this = this;
    let data = {};

    const response = await this.axios({
      method: method,
      url: url,
      params: params,
      headers: Object.assign({}, headers, this.getHeadersRest())
    }).catch(function(error) {
      _this.handleErrors(error);
    });

    if (response.status >= 200 && response.status <= 209) {
      data = response.data;
    } else {
      this.handleResponseErrors(response);
    }

    return data;
  };

  handleResponseErrors = response => {
    throw new BusinessError();
  };

  handleErrors = error => {
    if (error.response.status == 401) {
      //Erro no parâmetro
      throw new UnauthorizedError();
    } else if (error.response.status == 400) {
      //Cabeçalho errado
      throw new BadRequestError();
    } else if (error.response.status == 403) {
      //ClientId ou ClientSecret errado
      throw new ForbiddenError();
    } else {
      //Falta:
      // 404
      throw new ServiceError();
    }
  };
}
