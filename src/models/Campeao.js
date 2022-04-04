const Sequelize = require("sequelize");
const connection = require("../database/db");

const Campeao = connection.define(
        "campeao", {  
              
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            nome: {
                
                type: Sequelize.STRING,
                allowNull: false,
            },

            descricao: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            imagemcard: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            funcao: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            dificuldade: {
                type: Sequelize.STRING,
                allowNull: false,
            }
            
        }, 
            {
                freezeTableName: true,
                timestamps: false,
                createdAt: false,
                updateAt: false,
                dialect: "postgres"
            }
    );
    
module.exports = Campeao;