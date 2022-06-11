import Connector from "./RESTApi";

class ApiBooks {
    static getSearchBooks(url) {
        return Connector.getBooks(url)
    }
}

export default ApiBooks;