import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonType } from './lesson.type';
import { LessonsService } from './lessons.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonsService: LessonsService) {}

  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonsService.getLessons();
  }

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonsService.getLesson(id);
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonsService.createLesson(createLessonInput);
  }
}
