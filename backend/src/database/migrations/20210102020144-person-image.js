'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.createTable('PeopleImages', {
      
       
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        person_id: {
         allowNull: false,
         unique: true,
         type: Sequelize.INTEGER,
         references: { model: "People", key: "id" },
         onUpdate: "CASCADE",
         onDelete: "CASCADE"
       },
       mimetype: {
         type: Sequelize.STRING(8),
         allowNull: false
       },
       image: {
         type: Sequelize.BLOB,
         allowNull: false
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
