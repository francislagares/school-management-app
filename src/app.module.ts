import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonsModule } from './lessons/lessons.module';
import { StudentsModule } from './students/students.module';
import { Lesson } from './lessons/lesson.entity';
import { Student } from './students/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson, Student],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonsModule,
    StudentsModule,
  ],
})
export class AppModule {}
