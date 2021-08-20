const fs = require('fs');
const path = require('path');

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/productsDataBase.json"), "utf-8")),
    writeJson : (dataBase) => {
        fs.writeFileSync('./src/data/productsDataBase.json', JSON.stringify(dataBase), "utf-8")
    },
    carrousel: JSON.parse(fs.readFileSync(path.join(__dirname, "/carrousel.json"), "utf-8")),
 }
