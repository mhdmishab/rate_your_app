export const errorHandler=(error)=>{
    console.log(error);
    return res.send(500).json(({
        success:false,
        message:"Something went wrong",
    }))
}