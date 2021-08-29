import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonsModule } from './lessons/lessons.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonsModule,
    StudentsModule,
  ],
})
export class AppModule {}
