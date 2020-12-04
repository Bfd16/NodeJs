var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/NodeProje';

mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology: true},function(err,data){
    if(err){
        console.log('mongoose hatasi:'+ err);
    } else {
        console.log('mongoose baglandi:'+ mongoDB);
    }
});
mongoose.set('useCreateIndex', true);