import { User } from "./user.model";

export class UserService {
    private users: User[] = [
        {
            id: 1,
            name: 'firouzeh',
            family: 'dabbaghi',
            email: 'firouzeh.dabbaghi@yahoo.com',
            birthDate: '1989-10-08',
            address: 'iran,esf',
            postalCode: '0099887665'
        },
        {
            id: 2,
            name: 'hamzeh',
            family: 'amiryousefi',
            email: 'hamzeh.amiryousefi@yahoo.com',
            birthDate: '1979-10-08',
            address: 'iran,esf',
            postalCode: '00998833365'
        },
        {
            id: 3,
            name: 'saba',
            family: 'rad',
            email: 'saba.rad@yahoo.com',
            birthDate: '1989-11-08',
            address: 'iran,teh',
            postalCode: '009984587665'
        }
    ];

    getuser(id: number) {
        const user = this.users.find(x => x.id === id);
        return user;
    }
}