const model= require('../model/accountModel');

const register= async (req,res)=>{
    try{
        const result = await model.register(req.body);
        res.status(200).json(result);
    }catch(err){
        console.error(err);
        return res.status(500).json({ message: "something went wrong" });
    }
}

const login= async (req,res)=>{
    try {
        const result = await model.login(req.body);
        res.status(200).json(result);
    }catch (err){
        console.error(err);
        return res.status(500).json({ message: "something went wrong" });
    }
}

const logout= async (req,res)=>{
    try {
        const result = await model.logout(req.body);
        res.status(200).json(result);
    }catch (err){
        console.error(err);
        return res.status(500).json({ message: "something went wrong" });
    }
}

module.exports = {register,login,logout}