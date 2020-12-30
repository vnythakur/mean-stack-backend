const Careers = require('../../database/models/Careers');

const getCareers = (req, res, next) => {
    const text = req.query.text;
    const limit = req.query.limit || 10;

    Careers
    .find({"$or": [ 
            { "title": { "$regex": text, "$options": "i"} },
            { "altTitle": { "$regex": text, "$options": "i"} },
            { "category": { "$regex": text, "$options": "i"} }
        ]})
    .select("-url")
    .limit(limit)
    .exec(function(err, data) {
        if (!!err) {
            return res.status(400).send({
                error: err
            });
        }
        return data.length === 0 ? 
                res.status(404).send('No records found') : 
                res.status(200).send(data);
   });
}



const getCareerBySlug = (req, res, next) => {
    const slug = req.params.slug;

    Careers
    .findOne({ slug },)
    .exec(function(err, data) {
        if (!!err) {
            return res.status(400).send({
                error: err
            });
        }
        return !data ? 
                res.status(404).send('No records found') : 
                res.status(200).send(data);
   });
}

module.exports = {
    getCareers,
    getCareerBySlug
};