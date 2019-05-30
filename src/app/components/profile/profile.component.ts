import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../service/profile/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user: {};

  constructor(private profileserv: ProfileService) { }

  ngOnInit() {
    // this.profileserv.getUser().subscribe(user=>{this.user = user;});
  }

}
