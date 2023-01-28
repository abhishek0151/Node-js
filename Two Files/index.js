const http = require('http');
http.createServer(()=>{
  resp.writeHead(200,{'Content-Type':'application\json'});
  resp.write(JSON.Stringify(data));
  resp.end()
}).listen(5000);
