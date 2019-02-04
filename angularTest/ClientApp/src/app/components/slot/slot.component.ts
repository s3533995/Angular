import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";

import { SlotService } from '../../services/slot.service';



@Component({
  selector: 'slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})

export class SlotComponent
{
  slotList: SlotData[];

  constructor(public http: Http, private _router: Router, private _slotService: SlotService) {
    this.getSlotList();
  }

  getSlotList()
  {
    this._slotService.getSlotList().subscribe(data => this.slotList = data);
  }

  delete(Id) {
    const ans = confirm("Do you want to delete this slot?");
    if (ans) {
      this._slotService.deleteSlot(Id).subscribe((data) => { this.getSlotList(); },
        error => console.error(error));
      ;
    }
  }
}

interface SlotData {
  Id: number;
  roomId: string;
  bookedInStudentId: string;
  staffId: string;
  startTime: string;
}
