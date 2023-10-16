
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

export const appConnection = (app)=>{
    
    app.listen(port, () => {
    console.log(`running on port ${port}`)
})}