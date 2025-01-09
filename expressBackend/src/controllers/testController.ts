import {ServiceTest} from "../services/service";
import {Request, Response} from "express";

export class TestController{

    serviceTest: ServiceTest = new ServiceTest();

    public testController = (req: Request, res: Response): void => {
        const test = this.serviceTest.ServiceTest();
        res.send(test);
    }

}

