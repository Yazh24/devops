const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name = "CodeTest";

app.get("/", (req, res) => {
    const message = `Welcome to DevOps Easy  from RMC - Modified`
    res.send(message);
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = {app,server}
