
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

class App {

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    
    public app: express.Application;

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        const router = express.Router();

        router.get('/', (req: Request, res: Response) => {
            res.render('index.html');
        });

        router.post('/', (req: Request, res: Response) => {
            const data = req.body;
            // query a database and save data
            res.status(200).send(data);
        });

        this.app.use(express.static(__dirname + "/../public"));

    }

}
export default new App().app;