// ormconfig.ts
export default {
 type: 'postgres',
 host: 'localhost',
 port: 5432,
 username: "postgres",
 password: "root",
 database: 'nestauth',
 entities: ['dist/**/*.entity.js'], // Points to compiled entity files
 migrations: ['dist/migrations/*.js'], // Points to compiled migration files
 cli: {
  migrationsDir: 'src/migrations', // Directory for migration creation
 },
};
