var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var kullaniciSchema = new Schema ({
ad: {type: String, required: true},
soyad:{type: String, required: true},
email: {type: String, required: true, unique: true},
kullaniciAdi: {type: String, required: true, unique: true},
dogumtarihi: {type: Date}

},{collation:'kullanicilar'});


var Kullanici = mongoose.model('Kullanici', kullaniciSchema);

module.exports= Kullanici;