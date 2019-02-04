import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { SlotService } from "../../../services/slot.service";

@Component({
  selector: "edit-slot",
  templateUrl: "./edit-slot.component.html"
})

export class EditSlotComponent implements OnInit
{
  slotForm: FormGroup;
  title = "Create Slot";
  id: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _slotService: SlotService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.slotForm = this._fb.group({
      id: 0,
      roomId: "",
      startTime: "",
      staffId: "",
      bookedInStudentId: "",
    });
  }
    
  ngOnInit()
  {
      if (this.id > 0) {
        this.title = "Edit";
        this._slotService.getSlotById(this.id).subscribe(res => this.slotForm.setValue(res),
          error => this.errorMessage = error);
      }
    }

  save()
  {
    if (!this.slotForm.valid) {
      return;
    }
    if (this.title === "Create Slot") {
      this._slotService.addSlot(this.slotForm.value).subscribe((data) => {
        this._router.navigate(["/components/slot"]);
      }, error => this.errorMessage = error);
    }
    else if (this.title === "Edit") {
      this._slotService.updateSlot(this.slotForm.value).subscribe((data) => {
        this._router.navigate(["/components/slot"]);
      }, error => this.errorMessage = error);
    }
  }
  cancel() {
    this._router.navigate(["/components/slot"]);
  }

  get RoomID() {
    return this.slotForm.get("roomId");
  }

  get StartTime() {
    return this.slotForm.get("startTime");
  }

  get StaffID() {
    return this.slotForm.get("staffId");
  }

  get BookedInStudentID() {
    return this.slotForm.get("bookedInStudentId");
  }
}
