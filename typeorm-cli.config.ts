import { DataSource } from 'typeorm';
import { CoffeeRefactor1724158841658 } from './src/migrations/1724158841658-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1724159451591 } from './src/migrations/1724159451591-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1724158841658, SchemaSync1724159451591],
});
