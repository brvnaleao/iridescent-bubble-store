const { Model, DataTypes } = require("sequelize");

class PeopleImage extends Model{
    static init(connection){
        super.init({
            image: { type: DataTypes.BLOB,
            get() {
                return this.getDataValue('image').toString('base64'); // or whatever encoding is right
              }
            },
            mimetype: DataTypes.STRING,
 
        },{ 
            sequelize: connection
        });
    }

    // userDetails.associate = function (models) {
    //     userDetails.belongsTo(models.users, { 
    //       foreignKey: 'userId', 
    //       as: 'users' 
    //     });
    //   };

        
    static associate(models){
        this.belongsTo(models.People, {foreignKey : "person_id", targetKey: "id", as : 'People'});
    }



}

module.exports = PeopleImage;