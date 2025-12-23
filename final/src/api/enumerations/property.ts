import { PropertyReader } from './property-reader.ts';

class PropertyItem extends PropertyReader {}

export const Property = {
    AWS_LOGIN_TYPE_DEFAULT: new PropertyItem('AWS_LOGIN_TYPE_DEFAULT'),
    AWS_PROFILE: new PropertyItem('AWS_PROFILE'),
    INTERVAL_1_SECOND: new PropertyItem('INTERVAL_1_SECOND'),
    INTERVAL_5_SECONDS: new PropertyItem('INTERVAL_5_SECONDS'),
    INTERVAL_10_SECONDS: new PropertyItem('INTERVAL_10_SECONDS'),
    INTERVAL_30_SECONDS: new PropertyItem('INTERVAL_30_SECONDS'),
    INTERVAL_1_MINUTE: new PropertyItem('INTERVAL_1_MINUTE'),
    INTERVAL_2_MINUTE: new PropertyItem('INTERVAL_2_MINUTE'),
    INTERVAL_5_MINUTES: new PropertyItem('INTERVAL_5_MINUTES'),
    INTERVAL_10_MINUTES: new PropertyItem('INTERVAL_10_MINUTES'),
    PACKAGE_MODELS: new PropertyItem('PACKAGE_MODELS'),
    USER_ADMINISTRATOR_EMAIL: new PropertyItem('USER_ADMINISTRATOR_EMAIL'),
    USER_ADMINISTRATOR_NAME_FIRST: new PropertyItem('USER_ADMINISTRATOR_NAME_FIRST'),
    USER_ADMINISTRATOR_NAME_LAST: new PropertyItem('USER_ADMINISTRATOR_NAME_LAST'),
    USER_ADMINISTRATOR_PASSWORD: new PropertyItem('USER_ADMINISTRATOR_PASSWORD')
} as const;