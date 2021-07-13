export class User {
    constructor(
        public id: number,
        public name: string,
        public family: string,
        public email: string,
        public birthDate: string,
        public address: string,
        public postalCode: string
    ) {
    }
}

export enum UserMode {
    SignUp = 1,
    ReadOnly = 2,
    Edit = 3
}