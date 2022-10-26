import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute,private us:UsersService) { }

  ngOnInit(): void {
    this.user=this.us.getById(this.route.snapshot.params["id"]);
  }

}
