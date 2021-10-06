"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UesrsService = void 0;
const common_1 = require("@nestjs/common");
let UesrsService = class UesrsService {
    constructor() {
        this.users = [
            {
                id: 1,
                name: 'John Doe',
                username: 'jdoe',
                password: '123',
            },
            {
                id: 2,
                name: 'Jane Doe',
                username: 'jane',
                password: '123',
            },
        ];
    }
    async findOne(username) {
        return this.users.find(user => user.username === username);
    }
};
UesrsService = __decorate([
    (0, common_1.Injectable)()
], UesrsService);
exports.UesrsService = UesrsService;
//# sourceMappingURL=uesrs.service.js.map