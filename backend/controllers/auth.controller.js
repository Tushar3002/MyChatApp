import User from "../models/user.model.js";

export const signUp=async(req,res)=>{
    try {
        const {fullname,username,password,confirmPassword,gender}=req.body;
        if(password != confirmPassword){
            return res.status(400).json({error:"Password dont match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        //Hash Password
        //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    } catch (error) {
        
    }
}

export const login=(req,res)=>{
    console.log("login User")
}

export const logout=(req,res)=>{
    console.log("logout User")
}