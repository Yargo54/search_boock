class RestApi {
  static getBooks(url) {
    return fetch(url)
    .then((res) => res.json());
  }
}

export default RestApi;
