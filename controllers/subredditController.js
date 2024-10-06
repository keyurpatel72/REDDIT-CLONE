const Subreddit = require('../models/Subreddit');


//create Subreddit

exports.createSubreddit = async (req,res) =>{
    const {name,description} = req.body;
    try {
        let subreddit = await Subreddi.findOne({name});
        if(subreddit) return res.status(400).json({message: 'Subreddit already exists'})
            
        subreddit = new Subreddit({name,description,createdBy:req.user.id});
        await subreddit.save();
        res.json(subreddit);
        } catch (error) {
        res.status(500).send("server error");
    }
}

// get all subreddit

exports.getSubreddits = async (req,res)=>{
    try {
        const subreddit = await Subreddit.find();
    } catch (error) {
        res.status(500).send('Server error');
    }
}