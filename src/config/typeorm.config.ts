import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions={
    type:'postgres',
    host:'postgres',
    port:5432,
    username:'taskmanagement',
    password:'taskmanagement',
    database:'taskmanagement',
    entities: [__dirname+'/../**/*.entity.{ts,js}'],
    synchronize: true,
}