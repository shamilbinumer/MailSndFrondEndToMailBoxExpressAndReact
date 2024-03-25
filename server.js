import express from 'express';
import cors from 'cors';
import router from './router.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",router);

const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));
