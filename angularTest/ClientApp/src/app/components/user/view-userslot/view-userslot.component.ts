import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { SlotService } from "../../../services/slot.service";
import { Http } from "@angular/http";

@Component({
  selector: "view-userslot",
  templateUrl: "./view-userslot.component.html"
})

export class ViewUserSlotComponent implements OnInit
{
  userSlotList: UserSlotData[];
  userId: string;
  title: string;

  constructor(public http: Http, private _avRoute: ActivatedRoute, private _slotService: SlotService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.userId = this._avRoute.snapshot.params["id"];
    }
    this.getSlotList(this.userId);
  }
  ngOnInit(): void {
    if (this.userId) {
      this.title = this.userId;
      this._slotService.getUserSlotList(this.userId).subscribe(data => this.userSlotList = data);
      }
  }

  getSlotList(userId) {
    this._slotService.getUserSlotList(userId).subscribe(data => this.userSlotList = data);
  }

  back() {
    this._router.navigate(["/components/user"]);
  }
}

interface UserSlotData
{
  Id: number;
  roomId: string;
  bookedInStudentId: string;
  staffId: string;
  startTime: string;
}
