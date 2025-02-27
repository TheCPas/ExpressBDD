const mydatabase = require("../../database");

function getUsers(req, res) {
    
    let sql = "select * from users where 1=1";
    const sqlValues = [];
  
    if (req.query.language != null) {
      sql += " and language = ?";
      sqlValues.push(req.query.language);
    }
    if (req.query.city != null) {
        sql += " and city = ?";
        sqlValues.push(req.query.city);
    }
    mydatabase
        .query(sql, sqlValues)
        .then(([movies]) => {
            res.json(movies); // use res.json instead of console.log
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
}
  
const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);

    mydatabase
        .query("select * from users where id = ?", [id])
        .then(([movies]) => {
        if (movies[0] != null) {
            res.json(movies[0]);
        } else {
            res.sendStatus(404);
        }
        })
        .catch((err) => {
            //console.error(err);
            res.sendStatus(500);
        });
};
  
module.exports = {
    getUsers,
    getUsersById,
};