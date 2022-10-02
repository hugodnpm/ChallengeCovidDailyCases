import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CovidCasesController } from './covidCases.controller'
import { CovidCases } from './covidCases.entity'
import { CovidCasesResolver } from './covidCases.resolver'
import { CovidCasesService } from './covidCases.service'

@Module({
  imports: [TypeOrmModule.forFeature([CovidCases]), HttpModule],
  controllers: [CovidCasesController],
  providers: [CovidCasesService, CovidCasesResolver],
  exports: [CovidCasesService, CovidCasesResolver]
})
export class CovidCasesModule {}
