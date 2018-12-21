import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    @Output() logoutEmitter: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient: HttpClient) { }

    login(username: string, password: string) {
        return this.httpClient.post<any>('https://localhost:44302/api/users/authenticate', { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentBSCUser', JSON.stringify(user));
                    this.logoutEmitter.emit(true);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentBSCUser');
        this.logoutEmitter.emit(false);
    }

    getEmittedValue() {
        return this.logoutEmitter;
    }
}
