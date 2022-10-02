import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CovidCases } from './covidCases/covidCases.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { CovidCasesModule } from './covidCases/covidCases.module'

import { CovidCasesController } from './covidCases/covidCases.controller'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true
      })
    }),
    /*
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://hugosc:650380@127.0.0.1:5432/covidcase',
      autoLoadEntities: true,
      synchronize: true,
      // entities: [CovidCases],
      logging: true
    })*/ GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    CovidCasesModule
  ],
  controllers: [CovidCasesController],
  providers: [AppService]
})
export class AppModule {}
