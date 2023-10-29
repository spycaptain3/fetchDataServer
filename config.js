const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fetchEmail:11090412@fetchemail.qbqwcab.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Database Connected!');
}).catch((error)=>{
    console.log(`error in connecting with Database`);
})

const containSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
});

module.exports = new mongoose.model('contents',containSchema);