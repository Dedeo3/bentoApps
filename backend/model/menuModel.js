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
const selectedMenu= async (data)=>{
    return new Promise((resolve,reject)=>{
        const query= `select * from menu where menu_id= ?`;

        db.query(query,[data], (err,res) => {
            if(err){
                reject(err);
            }
            resolve({message: "get menu is successfully",
                data: res
            })
        })
    })
}

module.exports = {listMenu,selectedMenu};