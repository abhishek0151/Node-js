const http = require("http");
http.createServer((req, resp) => {
    resp.write(JSON.stringify({ name: "anil", email: "anil@test.com" }));
    resp.end();
  }).listen(5000);
