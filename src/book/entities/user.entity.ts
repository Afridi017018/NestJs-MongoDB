import { RoleEntity } from './role.enity';
import { Exclude, Expose, Transform } from "class-transformer";


export class BookEntity {

    title: string;
    author: string;

    @Exclude()
    published: number;

    @Exclude()
    _id: any;

    @Expose()
    get fullInfo(): string {
        return `${this.title} ${this.author}`;
    }


    @Transform(({ value }) => value.name)
    role: RoleEntity;

    constructor(partial: Partial<BookEntity>) {
        Object.assign(this, partial);
    }


}