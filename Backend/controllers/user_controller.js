import user from "../models/User";

export const getAllUsers = async (req, res) => {
    let users;
    try { 
        users = await user.find();
     }catch (err) {
         return console.log(err);
     }

     if (!users) {
        return res.status(500).json({message: "Error"});
     }

     return res.status(200).json({ users })

};