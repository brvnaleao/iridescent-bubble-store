const People = require("../models/People")
const PeopleImage = require("../models/PeopleImage")

module.exports ={

    async store (req, res){
        const id = req.params.id
        const person = await People.findByPk(id)
        const { mimetype, image, person_id } = req.body
        
        if(!person)
            res.status(400).send("User does not exists!")
                          

        PeopleImage.create( { mimetype, image, person_id } ).then(person => res.send(person)).catch(err => res.status(400).send(err))
    },
    async list (req, res){
        console.log(People)
        People.findAll().then(person => res.send(person)).catch(err => res.send(err))
    },
    async edit (req, res){

        const id = req.params.id
        const person = await People.findByPk(id)
        const { mimetype, image, person_id } = req.body
        if(!person)
            res.status(400).send("User does not exists!")
        PeopleImage.update({ mimetype, image, person_id }, { 
            where: {
                id: req.params.id
            }})
            .then(() => People.findAll({ where: {id: req.params.id},include: [{
                model: PeopleImage,
                as: "PeopleImages",
                required: true
            }]}))
            .then(person => res.send(person))
            .catch(err => res.status(400).send(err))
    },
    async delete (req, res){
        People.destroy({
            where: {
                id: req.params.id
        }}).then(() => res.send(true)).catch(err => res.status(400).send(err))
    }
}

