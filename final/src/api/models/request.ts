export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export class ApiRequest<T = unknown> {
    public readonly method: HttpMethod;
    public readonly path?: string;
    public readonly pathParams?: Record<string, string | number>;
    public readonly queryParams?: Record<string, string | number | boolean | (string | number)[]>;
    public readonly headers: Record<string, string>;
    public readonly body?: T;
    public readonly statusCode?: number;

    constructor(builder: ApiRequestBuilder<T>) {
        this.method = builder.getMethod();
        this.path = builder.getPath();
        this.pathParams = builder.getPathParams();
        this.queryParams = builder.getQueryParams();
        this.headers = builder.getHeaders();
        this.body = builder.getBody();
        this.statusCode = builder.getStatusCode();
    }

    public static request<T = unknown>(): ApiRequestBuilder<T> {
        return new ApiRequestBuilder<T>();
    }
}

export class ApiRequestBuilder<T> {
    private _method: HttpMethod = 'GET';
    private _path?: string;
    private _pathParams?: Record<string, string | number>;
    private _queryParams?: Record<string, string | number | boolean | (string | number)[]>;
    private _headers: Record<string, string> = {};
    private _body?: T;
    private _statusCode?: number;

    public method(method: HttpMethod): this { this._method = method; return this; }
    public path(path: string): this { this._path = path; return this; }
    public pathParams(params: Record<string, string | number>): this { this._pathParams = params; return this; }
    public queryParams(params: Record<string, string | number | boolean | (string | number)[]>): this { this._queryParams = params; return this; }
    public body(body: T): this { this._body = body; return this; }
    public statusCode(code: number): this { this._statusCode = code; return this; }
    public headers(headers: Record<string, string>): this {
        this._headers = { ...this._headers, ...headers };
        return this;
    }

    public getMethod(): HttpMethod { return this._method; }
    public getPath(): string | undefined { return this._path; }
    public getPathParams(): Record<string, string | number> | undefined { return this._pathParams; }
    public getQueryParams(): Record<string, string | number | boolean | (string | number)[]> | undefined { return this._queryParams; }
    public getHeaders(): Record<string, string> { return this._headers; }
    public getBody(): T | undefined { return this._body; }
    public getStatusCode(): number | undefined { return this._statusCode; }

    public build(): ApiRequest<T> { return new ApiRequest<T>(this); }
}