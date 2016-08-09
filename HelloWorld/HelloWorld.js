console.log('Hello NodeJS');
var fs = require("fs");
fs.readFileSync("van_ban.txt", function (err, data) {
   console.log("Kết thúc việc đọc nội dung. Nội dung tập tin: " + data);
});
console.log("Đang đọc nội dung tập tin...");