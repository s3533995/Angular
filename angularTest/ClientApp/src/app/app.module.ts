import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";


import { RoomComponent } from "./components/room/room.component";
import { AddRoomComponent } from "./components/room/add-room/add-room.component";
import { RoomService } from "./services/room.service";

import { SlotComponent } from "./components/slot/slot.component";
import { EditSlotComponent } from "./components/slot/edit-slot/edit-slot.component";

import { UserComponent } from "./components/user/user.component";
import { ViewUserSlotComponent } from "./components/user/view-userslot/view-userslot.component";



import { SlotService } from "./services/slot.service";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,

    RoomComponent,
    AddRoomComponent,

    SlotComponent,
    EditSlotComponent,

    UserComponent,
    ViewUserSlotComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    CommonModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },

      { path: "components/room", component: RoomComponent },
      { path: "components/room/add-room", component: AddRoomComponent },
      { path: "components/room/edit/:id", component: AddRoomComponent },

      { path: "components/slot", component: SlotComponent },
      { path: "components/slot/edit/:id", component: EditSlotComponent },

      { path: "components/user", component: UserComponent },
      { path: "components/user/view-userslot/:id", component: ViewUserSlotComponent },

    ])
  ],
  providers: [ RoomService, SlotService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
