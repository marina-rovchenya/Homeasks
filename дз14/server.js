
const fs = require('fs');
const http = require('http');  //подключили библиотеку
const server = http.createServer(function(request,response){  //записали метод createServer, который вызывает функцию, 
	if (request.url == '/') {
        fs.readFile('index.html', function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            response.write(data);
            response.end();
        });
    }
    if (request.url == '/load') {
        fs.readFile('data.json', function (err, text) {
            response.write(text, 'utf-8');
            response.end();
        })
    }
	if(request.url.indexOf("/data?")==0){
		const params = request.url.split("?")[1].split("&")
			.reduce((prev,curr)=>{
				curr = curr.split("=");
				return Object.assign(prev,{
					[curr[0]]:curr[1]
				})
			},{});
			if (params.max == 0) params.max = 5000;
			fs.readFile("data.json", function(err,text){
				let result = JSON.parse(text);
				
				if(params.min){ 
					result = result.filter(item=>Number(item.price>=params.min))
				}
				if(params.max){
					result = result.filter(item=>Number(item.price<=params.max));
				}
				if (params.category) {
	                result = result.filter(item => item.category == params.category);
	            }
				response.write(JSON.stringify(result));							//которая выполняется асинхронно
				response.end();   //данная сессия завершена, если не прописать запрос будет бесконечно отправляться
			})
	}
})

server.listen(8003, function(){			//задаем серверу прослушивать порт, функция вызывается когда сервер запущен успешно
	console.log("Server started at port 8003");
})

//в консоли Git Bash Here ввести node server.js, чтоб остановаить сервер ctrl+c