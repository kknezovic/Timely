const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectname:{ type: String, required: true},
    cdate:{ type: String, required: true},
    cdateStop:{ type: String, required: true},
    time:{ type: String, required: true}
 });

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;
