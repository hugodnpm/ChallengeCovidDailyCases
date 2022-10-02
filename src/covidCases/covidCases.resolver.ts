import { Query, Resolver } from '@nestjs/graphql'
import { CovidCasesService } from './covidCases.service'
import { CovidCasesPublic } from './dto/covidCases'

@Resolver(of => CovidCasesPublic)
export class CovidCasesResolver {
  constructor(private readonly covidcasesservice: CovidCasesService) {}
  @Query(returns => [CovidCasesPublic], { name: 'getAllCovidCases' })
  async getAllCovidCases(): Promise<CovidCasesPublic[]> {
    return this.covidcasesservice.getstatus()
  }
}
