const Format = require('../models/Form');


exports.createFormat = async (req, res) => {


    try {
        // Create format
        const format = new Format(req.body);

       

        // save format
        await format.save();
        res.json(format);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}