import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';


// import {files} from './seeders/files';
//TEST from seeders
// const createFiles = () => {
//     files.map(file => {
//         db.File.create(file)
//     })
// }
// createFiles();

app.get('/', (req, res) => {
    db.File.findAll()
        .then((result:object) => res.json(result))
        .catch((err:object) => console.error(err));
});


// db.File.findAll()
//     .then((result:object) => console.log(JSON.stringify(result)))
//     .catch((err:object) => console.error(err));



db.sequelize.sync().then(() => { //{force:true} DROP & RECREATE
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})