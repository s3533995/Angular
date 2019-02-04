import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class RoomService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string)
  {
    this.myAppUrl = baseUrl;
  }

  getRoomList()
  {
    return this._http.get(this.myAppUrl + "api/Rooms").map((res: Response) => res.json()).catch(this.errorHandler);
  }

  getRoomById(id: number)
  {
    return this._http.get(this.myAppUrl + "api/Rooms/Details/" + id).map((res: Response) => res.json())
      .catch(this.errorHandler);
  }

  addRoom(room)
  {
    return this._http.post(this.myAppUrl + "api/Rooms/Create", room).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateRoom(room) {
    return this._http.put(this.myAppUrl + "api/Rooms/Edit", room).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteRoom(Id) {
    return this._http.delete(this.myAppUrl + "api/Rooms/Delete/" + Id).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  

  errorHandler(errorHandler: Response)
  {
    console.log(errorHandler);
    return Observable.throw(errorHandler);
  }
} 
