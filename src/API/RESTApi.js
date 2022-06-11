class RestApi{
    static getBooks(url) {
        return fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(`Ошибка ${err.message}`))
    }
}

export default RestApi;