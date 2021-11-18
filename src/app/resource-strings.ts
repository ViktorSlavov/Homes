import { Language } from './common';



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
        view: 'VIEW',
        sqm: 'Square Area',
        price: 'Price per',
        meter: 'meter',
        meterSymbol: 'm',
        costPerSQM: 'EUR/m',
        floors: 'Number of Floors'
    },
    home: {
        imageUrl: 'background.jpg',
        bannerText: 'West Village',
        title: 'West Valley',
        subtitle: `Your dream house - closer that you'd imagine`,
        paragraph1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit convallis dui eu rhoncus. Ut sollicitudin semper quam vulputate ullamcorper. Donec maximus posuere bibendum. Cras et ante magna. Sed iaculis aliquet eros. Praesent varius accumsan magna et molestie. Nulla facilisi. Donec ultrices sodales ipsum, vel faucibus ex. Nam tristique tristique eros, at egestas urna cursus sed.`,
        paragraph2: `Situated near Bulgaria's thriving capital, the West Village housing complex offers a quiet place near the country's blooming heart. The gourgeous houses, all built to accommodate every need of a modern family, are situated in a calm and relaxed plain near Slivnitsa. Aproximately 50km away from Sofia's city centre, access to the booming metropolis is less than 30 minutes away, but the stress of the big city couldn't be further. Let your mind wander as you relax on the porch of your very own [НЕЩО ЗА КЪЩАТА], breathing in the fresh air coming from [НЕК'ВА ПЛАНИНА ТАМ].`,
        paragraph3: `With {{housesNumber}} available houses, West Village hopes to become a small, but sizable, community for those that value their personal time and want to be closer to nature. We also aim to take away the worry and uncertainty that comes with more rural areas - Bulgaria's biggest metropolitan area is less that an hours' drive away.`,
        houseTile1: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `,
        houseTile2: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `,
        houseTile3: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `,
        houseTile4: `Lorem Ipsum Lorem`,
        button: 'See homes'
    },
    houses: {
        imageUrl: '01.jpg',
        bannerText: 'Project',
        filter: 'Filter',
        footage: 'Area',
        priceRange: 'Price Range',
        maxSQM: 'Max square meters',
        minSQM: 'Min square meters',
        maxPrice: 'Max price',
        minPrice: 'Min price',
        price: 'Price',
        costPerSQM: 'Per square meter',
        priceTotal: 'Total',
        backToTop: 'Back to Top'
    },
    aboutUs: {
        imageUrl: '02.jpg',
        bannerText: 'About Us'
    },
    footer: {
        address: 'Sofia, bul. Montevideo 13, floor 1, app. 1',
        addressLocation: 'https://goo.gl/maps/d2V1ZFuk9vWuscN46',
        addressMapsLink: 'Find on Google Maps',
        email: 'offers@westvally.com',
        phone: '+35989898989'
    }
}

const BGResources: LocaleResources = {
    house: {
        view: 'ПРЕГЛЕД',
        sqm: 'Разгърната площ',
        price: 'Цена за',
        meter: 'метър',
        meterSymbol: 'м',
        costPerSQM: 'EUR/м',
        floors: 'Брой етажи'
    },
    errorPage: {
        header: 'Възникна Грешка - 404',
        subtitle: 'Не можахме да открием страницата, която търсите'
    },
    home: {
        imageUrl: 'background.jpg',
        bannerText: 'West Village',
        title: 'Уест Валий',
        subtitle: 'Мечтаният дом - по-близко, отколкото очакваш',
        paragraph1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit convallis dui eu rhoncus. Ut sollicitudin semper quam vulputate ullamcorper. Donec maximus posuere bibendum. Cras et ante magna. Sed iaculis aliquet eros. Praesent varius accumsan magna et molestie. Nulla facilisi. Donec ultrices sodales ipsum, vel faucibus ex. Nam tristique tristique eros, at egestas urna cursus sed.`,
        paragraph2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit convallis dui eu rhoncus. Ut sollicitudin semper quam vulputate ullamcorper. Donec maximus posuere bibendum. Cras et ante magna. Sed iaculis aliquet eros. Praesent varius accumsan magna et molestie. Nulla facilisi. Donec ultrices sodales ipsum, vel faucibus ex. Nam tristique tristique eros, at egestas urna cursus sed.`,
        paragraph3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit convallis dui eu rhoncus. Ut sollicitudin semper quam vulputate ullamcorper. Donec maximus posuere bibendum. Cras et ante magna. Sed iaculis aliquet eros. Praesent varius accumsan magna et molestie. Nulla facilisi. Donec ultrices sodales ipsum, vel faucibus ex. Nam tristique tristique eros, at egestas urna cursus sed.`,
        houseTile1: `Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум `,
        houseTile2: `Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум `,
        houseTile3: `LЛорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум Лорем Ипсум `,
        button: 'Виж къщите'
    },
    houses: {
        imageUrl: '01.jpg',
        bannerText: 'Проект',
        filter: 'Филтрирай',
        footage: 'Квадратура',
        priceRange: 'Ценови Диапазон',
        maxSQM: 'Макс. квадратура',
        minSQM: 'Мин. квадратура',
        maxPrice: 'Макс. цена',
        minPrice: 'Мин. цена',
        price: 'Цена',
        costPerSQM: 'За квадратен метър',
        priceTotal: 'Общо',
        backToTop: 'Върни се до горе'
    },
    aboutUs: {
        imageUrl: '02.jpg',
        bannerText: 'За Нас'
    },
    footer: {
        address: 'София, бул. Монтевидео 13, ет. 1, ап. 1',
        addressLocation: 'https://goo.gl/maps/d2V1ZFuk9vWuscN46',
        addressMapsLink: 'Вижте в Google Maps',
        email: 'offers@westvally.com',
        phone: '+35989898989'
    }
}

export const Resources: {[key in Language]: LocaleResources } = {
    'EN': ENResources,
    'BG': BGResources
}