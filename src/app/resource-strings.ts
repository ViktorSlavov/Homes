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
    home: {

    }
}

const BGResources: LocaleResources = {
    errorPage: {
        header: 'Възникна Грешка - 404',
        subtitle: 'Не можахме да открием страницата, която търсите'
    },
    home: {
        header1: 'West Valley',
        header2: 'Мечтания дом - по-близко, отколкото очакваш',
        paragraph1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit convallis dui eu rhoncus. Ut sollicitudin semper quam vulputate ullamcorper. Donec maximus posuere bibendum. Cras et ante magna. Sed iaculis aliquet eros. Praesent varius accumsan magna et molestie. Nulla facilisi. Donec ultrices sodales ipsum, vel faucibus ex. Nam tristique tristique eros, at egestas urna cursus sed.`,
        paragraph2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit convallis dui eu rhoncus. Ut sollicitudin semper quam vulputate ullamcorper. Donec maximus posuere bibendum. Cras et ante magna. Sed iaculis aliquet eros. Praesent varius accumsan magna et molestie. Nulla facilisi. Donec ultrices sodales ipsum, vel faucibus ex. Nam tristique tristique eros, at egestas urna cursus sed.`,
        paragraph3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit convallis dui eu rhoncus. Ut sollicitudin semper quam vulputate ullamcorper. Donec maximus posuere bibendum. Cras et ante magna. Sed iaculis aliquet eros. Praesent varius accumsan magna et molestie. Nulla facilisi. Donec ultrices sodales ipsum, vel faucibus ex. Nam tristique tristique eros, at egestas urna cursus sed.`
    }
}

export const Resources: {[key in Language]: LocaleResources } = {
    'EN': ENResources,
    'BG': BGResources
}