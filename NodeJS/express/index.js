const app=require('express')();

const PORT = 4000

app.listen(
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req, res) => {
    res.send( 'Hello this is a successfull get request');
});

app.post('/postRequest', (req, res) => {
    res.send( 'Hello this is a successfull post request');
});