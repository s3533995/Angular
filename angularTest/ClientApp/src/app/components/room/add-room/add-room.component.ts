import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { RoomService } from "../../../services/room.service";

@Component({
  selector: "add-room",
  templateUrl: "./add-room.component.html",
  styleUrls: ["./add-room.component.css"]
})

export class AddRoomComponent implements OnInit {
  roomForm: FormGroup;
  title: string = "Add New Room";
  id: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _roomService: RoomService, private _router: Router)
  {
    if (this._avRoute.snapshot.params["id"])
    {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.roomForm = this._fb.group({
      id: 0,
      roomId: ["", [Validators.required]],
    });
  }

  ngOnInit()
  {
    if (this.id > 0)
    {
      this.title = "Edit";
      this._roomService.getRoomById(this.id).subscribe(res => this.roomForm.setValue(res),
        error => this.errorMessage = error);
    }
  }

  save()
  {
    if (!this.roomForm.valid) {
      return;
    }
    if (this.title === "Add New Room") {
      this._roomService.addRoom(this.roomForm.value).subscribe((data) => {
        this._router.navigate(["/components/room"]);
      }, error => this.errorMessage = error);
    }
    else if (this.title === "Edit") {
      this._roomService.updateRoom(this.roomForm.value).subscribe((data) => {
        this._router.navigate(["/components/room"]);
      }, error => this.errorMessage = error);
    }
  }

  cancel()
  {
    this._router.navigate(["/components/room"]);
  }

  get roomID()
  {
    return this.roomForm.get("roomId");
  }
}
