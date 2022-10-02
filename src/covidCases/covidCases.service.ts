import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CovidCases } from './covidCases.entity'
import * as csv from 'fast-csv'
import * as fs from 'fs'
import { Observable } from 'rxjs'

@Injectable()
export class CovidCasesService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(CovidCases)
    private covidcasesRepository: Repository<CovidCases>
  ) {}
  async getstatus(): Promise<CovidCases[]> {
    return this.covidcasesRepository.find()
  }
  async getUpdate(): Promise<Observable<any>> {
    const result = this.httpService.get(
      'https://challenges.coode.sh/covid/data/covid-variants.csv'
    )
    let datacsv
    await result.subscribe(data => {
      datacsv = data
    })
    /*const stream = fs.readFile(data, (err, contents) => {
      console.log('teste', contents.toString())
    })
    const csvStream = csv.format({ headers: true })

    const streamCsv = csv().on('data', data => console.log(data))*/
    //const streamCvs = csv()
    console.log('CVS==>', result)
    return null
  }
}
