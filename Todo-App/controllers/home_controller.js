// Import the  task model
const Task = require('../models/task');

// Action for showing todos
module.exports.home = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) { console.log("Error in finding tasks"); return; }

        res.render('main', { 
            title: "ToDo App",
            tasks: tasks
        });
    });
};

// Action for creating todos
module.exports.create = (req, res) => {
    Task.create({
        description: req.body.description,
        dueDate: req.body.date,
        category: req.body.category
    }, (err, task) => {
        if(err){ console.log("Error in creating task: ", err); return; }

        return res.redirect('back');
    });
}   

// Action for deleting multiple todos
module.exports.deleteSelected = (req, res) => {
    Task.deleteMany(
        {
            _id: {
                $in: req.body.task
            }
        },
        (err) => {
            if(err){ console.log("Error in finding task"); return; }
            return res.redirect('back');
        }
    );
}

// Action for deleting single task
module.exports.delete = (req, res) => {
    
    Task.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log("Error in finding record ", err);
            return;
        }
        return res.redirect('back');
    });
}