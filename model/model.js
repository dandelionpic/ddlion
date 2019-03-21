const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/ddlion-comment'
mongoose.connect(DB_URL)


const models = {
	comments:{
		'name':{type:String, 'require':true},
		'email':{type:String, 'require':true},
		'message':{'type':String}
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}


