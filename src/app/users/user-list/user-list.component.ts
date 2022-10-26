import { User } from '../../core/model/user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public list: User[]
  public job: String;
  constructor(private us: UsersService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list=this.us.list;
    this.route.params.subscribe(
      (params)=>{
        this.job = params['job'] ;

        if (this.job!=null){
          this.list=this.us.list.filter((user)=>user.job==this.job)
         

          
        }
        else 
        {
          this.list=this.us.list;
        }
      }
    )
  }

}
