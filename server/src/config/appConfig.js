
const port = 4000;

export const appConnection = (app)=>{
    
    app.listen(port, () => {
    console.log(`running on port ${port}`)
})}