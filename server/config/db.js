//author: Azin Katiraee
//student ID: 301251029
//file name: db.js
//midterm: favourite book list


const username = "aizakat ";
    const password = "PENl2IqnVhbCUYo9";
    const cluster = "Cluster1";
    const dbname = "books";

module.exports = {
  //local MongoDB deployment ->
  //"URI": "mongodb://127.0.0.1/books229"

  "URI": "mongodb+srv://aizakat:PENl2IqnVhbCUYo9@cluster1.hlcgbi3.mongodb.net/books?retryWrites=true&w=majority"
};
