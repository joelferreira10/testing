
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

console.log(process.env.PRIVATE_KEY);
export const generateToken=(user)=>{
  const payload={
    userID:user._id,
    first_name:user.first_name,
    last_name:user.last_name,
    email:user.email,
    age:user.age,
    role:user.role,
    cart:user.cart
  }

  const token=jwt.sign(payload,process.env.PRIVATE_KEY,{expiresIn:"20m"});
  return token;
  
}
