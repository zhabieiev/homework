export interface ConfigDto {
    auth: AuthDto;
    uiConfig: UiConfigDto;
    apiConfig: ApiConfigDto;
}

export interface AuthDto {
    login: string;
    password: string;
    apiToken: string;
}

export interface UiConfigDto {
    seleniumBaseUrl: string;
}

export interface ApiConfigDto {
    seleniumApiUrl: string;
}
