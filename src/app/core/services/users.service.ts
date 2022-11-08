import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public currentUser:User;
  public list:User[]=[
    {
      id: 1,
      name: 'James Nix',
      job: 'Full Stack Developer',
      phone: '046 5685 6969',
      email:'JamesNix@spy.com',
      address:'5 Boar Lane SELLING 2LG',
      picture:'https://bootdey.com/img/Content/avatar/avatar2.png',
      password:'jamesnix123',
      role:'user'
    },
    {
      id: 2,
      name: 'Darlene Smith',
      job: 'UI/UX Designer',
      phone: '012 6587 1236',
      email:'DarleneSmith@spy.com',
      address:'57 Guildry Street GAMRIE',
      picture:'https://bootdey.com/img/Content/avatar/avatar3.png',
      password:'darlenesmith123',
      role:'user'
    },
    {
      id: 3,
      name: 'William Swift',
      job: 'Backend Developer',
      phone: '012 6587 1236',
      email:'WilliamSwift@spy.co',
      address:'80 South Street MONKW 7BR',
      picture:'https://bootdey.com/img/Content/avatar/avatar4.png',
      password:'williamswift123',
      role:'admin'
    },
  ]

  public getById(id:number):any{
for (let u of this.list) {
if(u.id==id) return u;
}
  }
  public getLogin(email:string,pw:string):any{
    for (let u of this.list) {
      if(u.email==email && u.password==pw){this.currentUser=u; return u;}
      }
  }
  public logOut(){
    this.currentUser=new User();
  }

  constructor() { }
}
