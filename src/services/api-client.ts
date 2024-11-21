import axios from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "089ec7b9cc2c4a87b5c3cf59b43e1b81",
  },
});
