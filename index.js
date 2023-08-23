const express = require('express');
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/', (request, response)=> response.send('hello from skillsoft!!'));
//
app.post('/addemployee', (request, response)=>{
  let empName = request.body.empName;
  let empPass = request.body.empPass;
  response.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
});

//
app.listen(port, () => {
	console.log("Listening " + port);
});
