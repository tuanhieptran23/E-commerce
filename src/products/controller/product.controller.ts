import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { ProductDTO } from '../dto/product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.productService.findById(id);
  }

  @Post()
  async create(@Body() ProductDTO: ProductDTO) {
    return this.productService.create(ProductDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() ProductDTO: ProductDTO) {
    return this.productService.update(id, ProductDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
