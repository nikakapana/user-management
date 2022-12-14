import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output,} from '@angular/core';
import {UserRole, IUser} from "../../../../interfaces";
import {LogService} from "../../../../components/services/log.service";
import {UserService} from "../../../../components/services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent {
// @Output() addUser: EventEmitter<IUser> = new EventEmitter<IUser>()

  constructor(private userService: UserService) {

  }

addUserHandler(fullName: string, role: string) {
  if (!fullName || !role) return;



  this.userService.addUser({
    fullName: fullName,
    role: role as UserRole,
    status: 'inactive'
  })

}

}
