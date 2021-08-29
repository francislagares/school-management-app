import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonsService } from './lessons.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonsService: LessonsService) {}

  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'añsdlfkqñlk',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonsService.createLesson(name, startDate, endDate);
  }
}
