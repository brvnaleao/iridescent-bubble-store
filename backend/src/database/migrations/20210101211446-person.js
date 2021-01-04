'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('People', {
      
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     name: {
       type: Sequelize.STRING(100),
       allowNull: false
     },
     email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true
    },
    address: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING(11),
      allowNull: false,
      unique: true
    },
     peopleImageId: {
       type: Sequelize.INTEGER
     },
     createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
   });
   
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('People');
  
  }
};
