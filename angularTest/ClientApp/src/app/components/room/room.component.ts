import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";

import { RoomService } from '../../services/room.service';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent
{
  roomList: RoomData[];

  constructor(public http: Http, private _router: Router, private _roomService: RoomService) {
    this.getRoomList();
  }

  getRoomList()
  {
    this._roomService.getRoomList().subscribe(data => this.roomList = data);
  }

  delete(Id)
  {
    const ans = confirm("Do you want to delete this room?");
    if (ans)
    {
      this._roomService.deleteRoom(Id).subscribe((data) => {
        this.getRoomList();
      },
        error => console.error(error));
;    }
  }
}

interface RoomData
{
  Id: number;
  roomId: string;
}
