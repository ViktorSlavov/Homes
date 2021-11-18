import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from '../common';
import { LanguageService } from '../language.service';
import { RequestOutcome } from './common';

const BASE_URL = 'http://localhost:3000/';
const CONTENT = "content";
const DETAILS = "details";

@Injectable()
export class CrudService {

  constructor(private dataSerivce: LanguageService, private httpClient: HttpClient) { }

  public updateContent(language: Language, props: { [key:string]: string }): Promise<RequestOutcome> {
    return new Promise((res, rej) => {
      this.httpClient.patch(`${BASE_URL}${CONTENT}/${language}`, props).subscribe(() => {
        res({
          success: true,
          message: `Successfully updated ${Object.keys(props).join(', ')}`
        });
        this.dataSerivce.getData();
      }, (err) => {
        rej({
          success: false,
          message: `Something went wrong`,
          error: err
        });
      });
    });
  }

  public updateDetails(detail: string, value: any): Promise<RequestOutcome> {
    return new Promise<RequestOutcome>((res, rej) => {
      this.httpClient.patch(`${BASE_URL}${DETAILS}/${detail}`, value).subscribe(() => {
        res({
          success: true,
          message: `Successfully updated ${value}`
        });
        this.dataSerivce.getData();
      }, (err) => {
        rej({
          success: false,
          message: `Something went wrong`,
          error: err
        });
      });
    });
  }
}
