const VerifyToken=(req,res) =>{
res.send("hola VerifyToken");
}
const receivedMessage =(req,res)=>{
    res.send("hola Recevied");
}
module.exports ={
    VerifyToken,
    receivedMessage  
}