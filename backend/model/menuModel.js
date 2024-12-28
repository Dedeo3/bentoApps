const db= require('../databases/config');

const listMenu= async ()=>{
    return new Promise((resolve,reject)=>{
        const query= `select * from menu`;
        db.query(query,(err,res) => {
            if(err){
                reject(err);
            }
            resolve({
                message: `success get menu`,
                data: res
            });
        })
    })
}

module.exports = {listMenu};