export declare type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};
export declare class UesrsService {
    private readonly users;
    findOne(username: string): Promise<User | undefined>;
}
