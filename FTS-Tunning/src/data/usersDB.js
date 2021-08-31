const fs = require('fs');
const path = require('path');

module.exports = {
    users: JSON.parse(fs.readFileSync(path.join(__dirname, "/user.json"), "utf-8")),
    writeUsersJson : (dataBase) => {
        fs.writeFileSync('./src/data/user.json', JSON.stringify(dataBase), "utf-8")
    }
  
}
