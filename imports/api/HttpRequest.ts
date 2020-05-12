import { HTTP } from "meteor/http";

export enum Request {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DEL = "DEL",
}

interface LooseObject {
    [key: string]: any
}

export function HttpRequest(request: Request, url: string, params?: object, data?: object, headers?: object): any {
    let options: LooseObject = {}
    if (params != null || params != {}) {
        options.params = params;
    }
    if (data != null || data != {}) {
        options.data = data;
    }
    if (headers != null || headers != {}) {
        options.headers = headers;
    }

    try {
        let response: HTTP.HTTPResponse = HTTP.call(
            request,
            url,
            options
        );
        return response.content;
    } catch (error) {
        console.log(error);
        return false;
    }
}