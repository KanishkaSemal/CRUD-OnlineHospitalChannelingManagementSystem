const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
	
	fullName :{
		type : String,
		required: true
		},
	
	position :{
		type : String,
		required: true
	},
	
	year :{
		type: Number,
		required: true
		
	},
	
	month :{
		type: Number,
		required: true
		
	},
	
	//Earnings
	
	basicSalary :{
		type: Number,
		required: true
		},
	
	houseRendAllowance:{
		type: Number,
		required: true
	},
	
	childrenEduAllowance: {
		type: Number,
		required: true
	},
	
	conveyanceAllowance:{
		type: Number,
		required: true
	},
	
	otherAllowances:{
		type: Number,
		required: true
	},
	
	//Deductions
	
	epfContribution:{
		type: Number,
		required: true
	},
	
	incomeTax:{
		type: Number,
		required: true
	},
	netSalary:{
		type: Number,
		required: true
	}
})	
	const Salary = mongoose.model("Salary",salarySchema);
	
	module.exports = Salary;