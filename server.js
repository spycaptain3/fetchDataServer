const express = require('express');
const app = express();
const content = require('./config.js');
const cors = require('cors')
const path = require('path')
app.use(express.json());
app.use(cors())
app.set('view engine','ejs')
app.set('views',path.join(''))
app.use(express.static(__dirname))

app.get('/',(req,res)=>{
   res.render('index')
})

app.post('/', async(req, resp) => {

   try{
    let data = new content(req.body);
    let result = await data.save();

    console.log(result);
    resp.send(result);

   }catch(error){
      console.log(error);
   }


//   const ans = req.body;
//   resp.send(`ans is : ${JSON.stringify(ans)}`);
});

app.listen(4015, () => {
  console.log('running on port 4015');
});

//mongodb+srv://fetchEmail:<password>@fetchemail.qbqwcab.mongodb.net/?retryWrites=true&w=majority
