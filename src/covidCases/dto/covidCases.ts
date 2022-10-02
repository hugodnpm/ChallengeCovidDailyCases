import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CovidCasesPublic {
  @Field({ nullable: true })
  id: number
  @Field({ nullable: true })
  location: string
  @Field({ nullable: true })
  date: Date
  @Field({ nullable: true })
  variant: string
  @Field({ nullable: true })
  num_sequences: number
  @Field({ nullable: true })
  perc_sequences: number
  @Field({ nullable: true })
  num_sequences_total: number
  /*@Field({ nullable: true })
  message: string*/
}
