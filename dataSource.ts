import { Categories } from 'src/entities/Categories';
import { Images } from 'src/entities/Images';
import { Todos } from 'src/entities/Todos';
import { Users } from 'src/entities/Users';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  database: 'nest-todo',
  entities: [Users, Todos, Images, Categories],
  synchronize: true,
  logging: true,
});

export default dataSource;
