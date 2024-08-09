import express from 'express';
import { createlink, updatelink, getalllinks, getlink } from './controller/user.controller';
import { Router } from 'express';
import { connect } from './Database/DB';
import link from './model/Links.model';
const router = Router();

connect();
const app = express();
const PORT = 8000
app.use(express.json());


app.get('/', (req, res) => {
    console.log("Fine")
    res.json("success")
})

router.route("/getall-links")
    .get(getalllinks)
    .post(createlink)
    

router.route("/:linkId")    
    .get(getlink)
    .put(updatelink)

    app.listen(PORT, async () => {
        console.log(`Server is running at http://localhost:${PORT}`);
      });