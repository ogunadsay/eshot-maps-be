import * as express from 'express'

export abstract class BaseController {
    protected req: express.Request;
    protected res: express.Response;
    protected body: string;

    protected abstract executeImpl(method:string): void | any;

    public async execute(req: express.Request, res: express.Response, method: string): Promise<void> {
        this.req = req;
        this.res = res;
        this.body = this.req.body
        try {
            await this.executeImpl(method);
        } catch (e) {
            await this.fail(e)
        }
    }

    public static jsonResponse(res: express.Response, code: number, message: string) {
        return res.status(code).json({message})
    }

    public ok<T>(res: express.Response, dto?: T) {
        if (!!dto) {
            return res.status(200).json(dto);
        } else {
            return res.sendStatus(200);
        }
    }

    public created<T>(dto?: T) {
        if (!!dto) {
            return this.res.status(201).json({...dto,success:true});
        } else {
            return this.badRequest()
        }
    }

    public unauthorized(message?: string) {
        return BaseController.jsonResponse(this.res, 401, message ? message : 'Unauthorized');
    }

    public notFound(message?: string) {
        return BaseController.jsonResponse(this.res, 404, message ? message : 'Not found');
    }

    public badRequest(message?: string) {
        return BaseController.jsonResponse(this.res, 400, message ? message : 'Bad request');
    }

    public fail(error: Error | string) {
        console.log(error);
        return this.res.status(500).json({
            message: error.toString()
        })
    }
}