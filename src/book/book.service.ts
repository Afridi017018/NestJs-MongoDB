import { BookEntity } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schema/Book';
import { Model } from 'mongoose';
import { RoleEntity } from './entities/role.enity';

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument> ){}

  // async create(createBookDto: CreateBookDto) : Promise<Book> {

  //   const model = new this.bookModel();

  //   model.title = createBookDto.title;
  //   model.author = createBookDto.author;
  //   model.published = createBookDto.published

  //   return model.save();
  // }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const model = new this.bookModel(createBookDto);
    const savedBook = await model.save();
    return savedBook;
  }


  
  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findAllSerialization(): Promise<BookEntity[]> {
    const books = await this.bookModel.find().exec();
    // return books.map(book => new BookEntity(book.toJSON()));
    return books.map(book => new BookEntity({...book.toJSON(),role: new RoleEntity({ id: 1, name: 'admin' })}));
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
