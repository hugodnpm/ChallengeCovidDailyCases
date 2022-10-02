import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class CovidCases {
  @PrimaryGeneratedColumn('increment')
  id: number
  location: string
  @Column({ nullable: true })
  date: Date
  @Column({ nullable: true })
  variant: string
  @Column({ nullable: true })
  num_sequences: number
  @Column({ nullable: true })
  perc_sequences: number
  @Column({ nullable: true })
  num_sequences_total: number
  @Column({ nullable: true })
  message: string
}
