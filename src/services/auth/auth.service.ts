import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService) {
    }

    async validateUser(email,password){
        let theUser=await this.userService.findOne(email);
        if(theUser!==null){
            return theUser
        }else{
            return undefined;
        }
    }
}
