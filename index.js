import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import route from './src/routes/index.js';
import connectDB from './src/config/db/index.js';
import methodOverride from 'method-override';
const port = process.env.PORT || 5000;
const app = express();

// * config
connectDB();
app.use(bodyParser.json({ limit:'30mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '30mb'
}));
app.use(cors());
app.use(methodOverride('_method'));
// * Routes init
route(app);

// * Access port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});