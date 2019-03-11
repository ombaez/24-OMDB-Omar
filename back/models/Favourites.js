const S = require('sequelize');
const db = require ('../config/db')


const Favourites = db.define('favourites', {
    movies: {
        type: S.ARRAY(S.TEXT),
        allowNull: true,
    }
})

module.exports = {
    Favourites
};