import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {AddUserComponent} from "./components/add-user/add-user.component";
import {UserItemComponent} from "./components/user-item/user-item.component";
import {ButtonModule} from "../../components/button/button.module";
import {DropdownModule} from "../../components/dropdown/dropdown.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserItemComponent

  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
ButtonModule,
    DropdownModule,
    SharedModule
  ]
})
export class UsersModule { }
