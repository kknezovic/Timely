const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req,res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: '+ err));

});

router.route('/').post((req,res) => {
    const projectname = req.body.projectname;
    const cdate = req.body.cdate;
    const cdateStop = req.body.cdateStop;
    const time = req.body.time;

    const newProject = new Project({
        projectname,
        cdate,
        cdateStop,
        time,
    });

    newProject.save()
        .then(() => res.json('Project added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;