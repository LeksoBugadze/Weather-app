import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {router} from './routes/index.js'
import rateLimit from "express-rate-limit"

dotenv.config();

const PORT=process.env.PORT||5000;

const app = express();
app.use(cors());

const limiter= rateLimit({
    windowMs: 10 * 60 * 1000,
    max:20
})

app.use(limiter);
app.set('trust proxy',1);

app.get('/',(req,res)=>{
    res.send('WEATHER APP SERVER');
})

app.use('/api',router);


app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})
