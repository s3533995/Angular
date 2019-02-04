import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class UserService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }



  getUserList() {
    return this._http.get(this.myAppUrl + "api/Users").map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getUserById(id: number) {
    return this._http.get(this.myAppUrl + "api/Users/Details/" + id).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteUser(Id) {
    return this._http.delete(this.myAppUrl + "api/Rooms/Delete/" + Id).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }


  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
