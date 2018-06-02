export class SpotifyOAuthCallbackResult {
    AccessToken?: string;
    TokenType?: TokenType;
    ExpiresIn?: number;
    HasErrors: boolean;

    constructor(payload: string) {

        if (!payload) {
            return;
        }

        let hashTable = payload.split('&');
        let result = {};
        let data = hashTable.forEach((pair: string) => {
            let values = pair.split('=');
            result[values[0]] = values[1];
        });

        this.AccessToken = result['#access_token'];
        this.TokenType = result['token_type'];
        this.ExpiresIn = result['expires_in'];

        this.HasErrors = false;
    }

    static IsOAuthCallback(hash: string): boolean {

        // TODO: more smart implementation
        if (!hash) {
            return false;
        }

        return true;
    }
}

enum TokenType {
    Bearer = 1
}