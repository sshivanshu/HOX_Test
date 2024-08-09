import express from 'express';
import { Router } from 'express';
import linkRoutes from './routes/linkRoutes';

const router = Router();



const app = express();
const PORT = 8000
app.use(express.json());


app.get('/', (req, res) => {
    console.log("Fine")
    res.json("success")
})

app.use('/api', linkRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is running at http://localhost:${PORT}`);
      });