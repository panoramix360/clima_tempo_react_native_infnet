import Axios from "axios";
import Constants from "./src/util/Constants";

export const axiosClimaTempo = Axios.create({
  baseURL: Constants.service.baseUrlClimaTempo
});
