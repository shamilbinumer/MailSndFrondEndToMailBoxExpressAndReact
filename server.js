// import express from 'express';
// import router from './router.js';
// import cors from 'cors';
// import dotenv from 'dotenv'
// dotenv.config()
// const app=express()
// app.use(cors())
// app.use(express.json({limit:"20mb"}));
// app.use("/api",router);
// app.listen(process.env.PORT,()=>{
//     console.log("server started at ",process.env.PORT);
// })

import express from 'express';

import cors from 'cors';
import router from './router.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",router);

const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));
