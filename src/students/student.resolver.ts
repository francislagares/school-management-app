import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { StudentType } from './student.type';
import { StudentsService } from './students.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentsService) {}

  @Query((returns) => [StudentType])
  async students() {
    return this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  async student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
