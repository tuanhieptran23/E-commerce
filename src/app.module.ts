import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dbconfig from '../db';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/module/product.module';
import { ProductController } from './products/controller/product.controller';
import { ProductService } from './products/service/product.service';
import { Product } from './products/entity/product.entity';
@Module({
  imports: [TypeOrmModule.forRoot(dbconfig),ProductModule,TypeOrmModule.forFeature([Product]),],
  controllers: [AppController,ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
