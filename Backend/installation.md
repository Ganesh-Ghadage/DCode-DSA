## This doc is for referance to set up database for project

### 1. To run postgress locally using docker

``` bash
docker run --name my-postgres -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
```

make sure docker is running before runing above command

The url looks something like below
```
DATABASE_URL="postgresql://myusername:mypassword@localhost:5432/postgres"
```


### 2. To generate Prisma Client

- first create a model in schema.prisma file.
- run ` npx prisma generate ` command, it will generate prisma client under .\src\generated\prisma


### 3. Prisma Migration

` npx prisma migrate dev `

run above command to migrate prisma model into sql for postgresql

### 4. Sync Database with our changes

` npx prisma db push `

it will push our chnages to database and make our db sync with our changes made

### 5. Create db

now create the src/libs/db.js file and create db

``` javascript 
import { PrismaClient } from '../generated/prisma/client/index.js'

const globalThisForPrisma = globalThis

export const db = globalThisForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThisForPrisma.prisma = db
```