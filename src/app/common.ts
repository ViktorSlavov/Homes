export interface Common {
}

export enum HomeType {
    HOUSE = 'House',
    APARTMENT = 'Apartment'
}


export declare type Language = 'EN' | 'BG';
declare type StringResource = {
    [key in Language]: string;
}

export declare type Currency = 'BGN' | 'EURO';

abstract class Home {
    public type!: HomeType;
    constructor(
        public available: boolean,
        public SQM: number,
        public costPerSQM: number,
        public name: StringResource,
        public image: string,
        public id: string,
        public description: StringResource) {
    }
}
export class Apartment extends Home {
    public type: HomeType = HomeType.APARTMENT;
    constructor(
        public available: boolean,
        public SQM: number,
        public costPerSQM: number,
        public name: StringResource,
        public image: string,
        public id: string,
        public description: StringResource,
        public balconies: number,
        public garage: boolean) {
            super(available, SQM, costPerSQM, name, image, id, description);
        }
}

export class House extends Home {
    public type: HomeType = HomeType.HOUSE;
    constructor(
        public available: boolean,
        public SQM: number,
        public costPerSQM: number,
        public name: StringResource,
        public image: string,
        public id: string,
        public description: StringResource,
        public floors: number) {
            super(available, SQM, costPerSQM, name, image, id, description);
        }
}

