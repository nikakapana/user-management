import { Injectable } from '@angular/core';
import {IUser, UserRole, UserStatus} from "../../interfaces";
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = []
  constructor(private logService: LogService) {
  }

  init(user: IUser) {
    console.log(user.fullName)
  }
  addUser(user: IUser) {
    this.users.push(user)
    this.logService.log(`new user created: ${user}`)
  }
  changeStatus(status: UserStatus, index: number) {
    this.users[index] = {...this.users[index], status};
    console.log(this.users[index])
    this.logService.log(`'user status changed: ', ${status}, ${index}`);

  }

  changeRole(role : UserRole, index: number){
    this.users[index] = {...this.users[index], role};
    console.log(this.users[index])
    this.logService.log(`'user role changed: ', ${role}, ${index}`)
  }

}
