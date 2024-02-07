## NestJS Base Source With Prisma (Using Repository Pattern)
A base NestJS project that I create to easily apply to almost all Backend Project With Prisma. 
- This base source use Repository Pattern: Controller -> Service -> Repository -> Model
- Using Class Generic so will be easy to use
- Using Prisma ORM (TypeORM, Sequelize can do the same, just change a little).
- Using route concept like Express to manage route easily .
- Some of general CRUD function will be on Repository/base and Service/base, new repository or service just extend it.

- You can apply middleware for specific controller/endpoint (Set this on /Module)


Run:
```
npm run start:dev //development enviroment

npm run start:prod //development enviroment

npm run start:debug //debug enviroment
```

Hope this repo will help you 
If you dont mine, please give me a star ⭐