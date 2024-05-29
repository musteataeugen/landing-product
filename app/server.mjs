// 1. import http funcionality

import http from "node:http";
import fs from "node:fs";

const routes = {
  "/": "index.html",
  "/style.css": "style.css",
  "/favicon/black_friday.png": "favicon/black_friday.png",
  "/images/product.jpg": "images/product.jpg"
}
//HW1*: what if product data would be stored as an XML?

// 2. create the server object
const server = http.createServer((req, res) => {
  // router
  // 2 varianata
  if (routes[req.url]) {
    fs.readFile(routes[req.url], (err, data) => {
      //1. react only for the main page template
      if (routes[req.url] == "index.html") {

        //2.load the product from json
        fs.readFile("data/product.json", (err, dataJSON) => {
          let productData = JSON.parse(dataJSON);

          //3.replace the date in the html template
          data = data.toString();
          data = data.replace("{title}", productData.name);
          data = data.replace("{image}", productData.image);
          data = data.replace("{subtitle}", productData.subtitle);
          data = data.replace("{description}", productData.description);
          data = data.replace("{priceAmount}", productData["price"]["Amount"]);
          data = data.replace("{priceCurrency}", productData["price"]["Currency"]);

          //  data = data.replace("{tags}", productData.tags.map(tag => `<li>${tag}</li>`).join(""));  

          //HW2:imagine that "tags": [ "books", "JS", "design", "learning", "education", "2018", "programming", "IT"],
          //    is added to your json file:
          //    -refactor the html template
          //    -refactor the server script using a loop so the tags would be rendered as an unordered html list

          let tagsList = "<ul>"
          for (let i = 0; i < productData.tags.length; i++) {
            tagsList += `<li>${productData.tags[i]}</li>`
          }
          tagsList += "</ul>"
          data = data.replace("{tags}", tagsList);

          res.write(data)
          res.end()
        })

      } else {
        res.write(data)
        res.end()
      }

    })
  } else {
    res.write("Not found")
    res.end()
  }
})

// 3. start the server

server.listen(8080)