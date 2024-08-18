const db = require('../dbconfig/db');
class modl{

    static async addmodl(data) {
       return new Promise ((resolve, reject) => {
           db.query(
               `INSERT INTO fpUser(fname,lname,birthday,email,userRole) VALUES(?,?,?,?,?)`,
               [data.fname,data.lname,data.birthday,data.email,data.role],
               (err, result) => {
                   if(err) {
                       reject(err);
                   } else {
                       resolve(result);
                   }
               }
           )
       })
    }

    static async viewmodl(data) { 
        return new Promise ((resolve, reject) => {
            db.query(
                `SELECT * FROM fpUser WHERE userRole = ?`,
                [data.role],
                (err, result) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            )
        })
    }

    static async deletemodl(data) {
        return new Promise ((resolve, reject) => {
            db.query(
                `DELETE FROM fpUser WHERE id = ?`,
                [data.id],
                (err, result) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            )
        })

    }
    

}

module.exports = modl;