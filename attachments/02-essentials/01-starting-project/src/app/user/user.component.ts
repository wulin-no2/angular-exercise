import { Component ,signal, computed,input, output, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() id!: string;
  onSelectUser() {

  }
}

  // selectedUser = input.required<String>();
