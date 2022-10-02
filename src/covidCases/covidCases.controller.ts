import { Controller, Get } from '@nestjs/common'
import { CovidCasesService } from './covidCases.service'

@Controller()
export class CovidCasesController {
  constructor(private readonly covidcasesService: CovidCasesService) {}

  @Get()
  getStatus(): string {
    return 'Backend Challenge 2021 🏅 - Covid Daily Cases'
  }
  @Get('update')
  getData() {
    return this.covidcasesService.getUpdate()
  }
}
