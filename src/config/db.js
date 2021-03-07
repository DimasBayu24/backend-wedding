const mongoose = require('mongoose');
const connection = "mongodb+srv://dimasbayu:Mtq37hT3v5sXGR0q@cluster0.xvxxh.mongodb.net/wedding?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

