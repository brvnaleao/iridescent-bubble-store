const { Model, DataTypes } = require("sequelize");

class People extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            address: DataTypes.STRING,
            cpf: DataTypes.STRING,
            phone: DataTypes.STRING
        },{ 
            sequelize: connection
        });
    }
    
    static associate(models){
        this.hasOne(models.PeopleImage, {foreignKey : "person_id", targetKey: "id", as : 'PeopleImages'});
    }

}

module.exports = People;