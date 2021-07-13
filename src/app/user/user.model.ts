export class User {
    constructor(
        public id: number = null,
        public name: string = null,
        public family: string = null,
        public email: string = null,
        public birthDate: string = null,
        public address: string = null,
        public postalCode: string = null,
        public password: string = null
    ) {
    }
}

export enum UserPageState {
    SignUp = 1,
    ReadOnly = 2,
    Edit = 3
}