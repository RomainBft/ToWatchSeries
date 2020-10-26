export class UserState {
    account: Object | null
    isUserLoggedIn: Boolean
    
    constructor() {
        this.account = null,
        this.isUserLoggedIn =  false
    }
}

export interface Account {
    id: number,
    user : String,
    jwt : String
}