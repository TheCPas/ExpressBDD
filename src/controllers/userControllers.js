const mydatabase = require("../../database");

function getUsers(req, res) {
    mydatabase
        .query("select * from movies")
        .then(([movies]) => {
            res.sendStatus(200).json(movies); // use res.json instead of console.log
        })
        .catch((err) => {
            //console.error(err);
            res.sendStatus(500);
        });
}
  
const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);

    mydatabase
        .query("select * from movies where id = ?", [id])
        .then(([movies]) => {
        if (movies[0] != null) {
            res.sendStatus(200).json(movies[0]);
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