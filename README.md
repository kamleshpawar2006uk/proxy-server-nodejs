# Proxy Server using NodeJS

Clone this repository and do the following: 

Run
```sh
npm install
```

Then open `index.js` file and specify your rest API server host and port in `target` variable: 

```
var target = 'http://localhost:8083';
```

And specify host and port you want your proxy server to run on as done in `index.js` `server.listen()` function

```
server.listen(3011, function() {
  console.log('Proxy server is running at http://localhost:3011');
});
```

As per this example, your UI application should use 
```
http://localhost:3011
```
as rest API host and port (this is the proxy) and backend server should run on 

```
http://localhost:8083
```



