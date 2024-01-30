import { BookEntity } from './entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete,UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
// @UseInterceptors(ClassSerializerInterceptor)
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post("add")
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }


  //implemented serialization
  @Get("serialization")
  @UseInterceptors(ClassSerializerInterceptor)
  findAllSerialization() {
    return this.bookService.findAllSerialization();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bookService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.bookService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookService.remove(+id);
  // }
}
