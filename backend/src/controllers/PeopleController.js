const People = require("../models/People")
const PeopleImage = require("../models/PeopleImage")


module.exports ={
    async store (req, res){
    const{
        cpf, name, email, address, phone
    } = req.body

        People.create({cpf, name, email, address, phone}).then(person => res.send(person)).catch(err => res.status(400).send(err))
    },
    async getOne (req, res){
        const personImage = await PeopleImage.findOne({where: {person_id : req.params.id}})
           
        if(personImage){
            People.findAll( { where: {id: req.params.id},include: [{
                model: PeopleImage,
                as: "PeopleImages",
                required: true
            }]})
                .then(person => res.send(person))
                .catch(err => res.send(err))
        }else{
            People.findAll( { where: {id: req.params.id}})
                .then(person => res.send(person))
                .catch(err => res.send(err))
        }
       
    },

    async list (req, res){
           
        console.log(People)
        People.findAll().then(person => res.send(person)).catch(err => res.send(err))
    },
    async edit (req, res){
        People.update(req.body, { 
            where: {
                id: req.params.id
            }})
            .then(() => People.findAll({
                where: {
                    id: req.params.id
            }}))
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

