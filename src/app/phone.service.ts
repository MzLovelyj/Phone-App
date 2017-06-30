import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class PhoneService {
Base_URL: String = 'http://localhost:3000';
// express testing

constructor (private myHttp: Http) {}

    getList() {
        // this is requesting info from the backEnd. 
        return this.myHttp.get(`${this.Base_URL}/api/phones`)
        .toPromise()
        // if the promise is returned then return Json File
        .then(apiResponse => apiResponse.json())
    }

    get(id) {
        return this.myHttp.get(`${this.Base_URL}/api/phones/${id}`)
         .toPromise()
        .then(apiResponse => apiResponse.json())
    }
    remove(id) {
        return this.myHttp.delete(`${this.Base_URL}/api/phones/${id}`)
        .toPromise()
        .then(apiResponse => apiResponse.json())
    }
}
