const fs = require('fs');

module.exports = function () {
  return actor({

    print(text) {
      fs.writeFile('./output/orderSummary.txt', text, function(err) {
        if(err) {
          return console.log(err);
        }
      });
    }
  });  
}