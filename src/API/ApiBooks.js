import Connector from "./RESTApi";

const apiKey = "AIzaSyA8o1lCTefxo-KvhUkc8KdtFXMU3QQMFFc";
const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

class ApiBooks {
    static getSearchBooks(value) {
        return Connector.getBooks(`${baseUrl} + ${value.themes}+inauthor:${value.author}+intitle:${value.title}+inpublisher:${value.publishingHouse}&maxResults=30&key=${apiKey}`)
    }
}

export default ApiBooks;