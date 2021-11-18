import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/auth';
const AUTH_ENDPOINT = 'login';
const LOGOUT_ENDPOINT = 'logout';
const CHECK_ENDPOINT = 'validate';
const REISSUE = 'reissue-token';
const ITEM_NAME = 'wv-elegantno-ime';

@Injectable()
export class AuthService {

  public authToken!: string;

  constructor(private httpClient: HttpClient) { }

  public isAuthenticated(): boolean {
    if (!this.authToken) {
      this.authToken = localStorage.getItem(ITEM_NAME) || "";
    }
    return !!this.authToken;
  }

  public getLocalToken(): void {
    this.authToken = localStorage.getItem(ITEM_NAME) || "";
  }

  public login(creds: { username: string, password: string }): Promise<boolean> {
    return new Promise((res, _rej) => {
      this.httpClient.post<{ token: string }>(`${BASE_URL}/${AUTH_ENDPOINT}`, creds).subscribe(e => {
        this.authToken = e.token;
        localStorage.setItem(ITEM_NAME, this.authToken);
        res(true);
      }, () => {
        res(false);
      });
    });
  }

  public logout(): void {
    this.httpClient.post<{ success: boolean }>(`${BASE_URL}/${LOGOUT_ENDPOINT}`, { token: this.authToken }).subscribe(e => {
      this.authToken = "";
      localStorage.removeItem(ITEM_NAME);
    }, () => { });
  }

  private reissueToken() {
    this.httpClient.post<{ token: string }>(`${BASE_URL}/${REISSUE}`, { token: this.authToken }).subscribe((e) => {
      this.authToken = e.token;
    });
  }

  public checkState(): void {
    this.httpClient.post<{ valid: boolean }>(`${BASE_URL}/${CHECK_ENDPOINT}`, { token: this.authToken }).subscribe((r) => {
      if (!r.valid) {
        localStorage.removeItem(ITEM_NAME);
        this.authToken = "";
      }
    }, () => {
      localStorage.removeItem(ITEM_NAME);
    });
  }
}
