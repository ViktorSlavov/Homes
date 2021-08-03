import { Language } from "./common";



export interface ResourceStrings {
    [key: string]: string;
}

export interface LocaleResources {
    [key: string]: ResourceStrings;
}


const ENResources: LocaleResources = {
    errorPage: {
        header: 'Page not found - 404',
        subtitle: 'We couldn\'t find what you\'re looking for'
    },
    house: {

    }
}

const BGResources: LocaleResources = {
    errorPage: {
        header: 'Възникна Грешка - 404',
        subtitle: 'Не можахме да открием страницата, която търсите'
    },
    house: {
        
    }
}

export const Resources: {[key in Language]: LocaleResources } = {
    'EN': ENResources,
    'BG': BGResources
}