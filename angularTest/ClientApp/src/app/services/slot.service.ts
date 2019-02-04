import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class SlotService
{
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getSlotList() {
    return this._http.get(this.myAppUrl + "api/Slots").map((res: Response) => res.json())
      .catch(this.errorHandler);
  }

  getUserSlotList(userId) {
    return this._http.get(this.myAppUrl + "api/Slots/" + userId).map((res: Response) => res.json())
      .catch(this.errorHandler);
  }

  getSlotById(id: number) {
    return this._http.get(this.myAppUrl + "api/Slots/Details/" + id).map((res: Response) => res.json())
      .catch(this.errorHandler);
  }

  addSlot(slot) {
    return this._http.post(this.myAppUrl + "api/Slots/Create", slot).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateSlot(slot) {
    return this._http.put(this.myAppUrl + "api/Slots/Edit/", slot).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteSlot(Id) {
    return this._http.delete(this.myAppUrl + "api/Slots/Delete/" + Id).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }



  errorHandler(errorHandler: Response) {
    console.log(errorHandler);
    return Observable.throw(errorHandler);
  }
} 
