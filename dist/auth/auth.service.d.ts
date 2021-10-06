import { JwtService } from '@nestjs/jwt';
import { UesrsService } from 'src/uesrs/uesrs.service';
export declare class AuthService {
    private userservice;
    private jwtService;
    constructor(userservice: UesrsService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
