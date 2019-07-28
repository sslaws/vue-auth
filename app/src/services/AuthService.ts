import { UserManager, WebStorageStateStore, User } from 'oidc-client';

export default class AuthService {
    private userManager: UserManager;

    constructor() {
        const AUTHORITY: string = 'http://localhost:9000/auth/realms/Sample';

        const settings: any = {
            userStore: new WebStorageStateStore({ store: window.localStorage }),
            authority: AUTHORITY,
            client_id: 'test',
            redirect_uri: 'http://localhost:8080/callback.html',
            response_type: 'code',
            scope: 'openid profile',
            post_logout_redirect_uri: 'http://localhost:8080/',
            filterProtocolClaims: true,

        };

        this.userManager = new UserManager(settings);
    }

    public getUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    public login(): Promise<void> {
        return this.userManager.signinRedirect({
            extraQueryParams: {
                kc_idp_hint: 'github',
            },
        });
    }

    public logout(): Promise<void> {
        return this.userManager.signoutRedirect();
    }
}
