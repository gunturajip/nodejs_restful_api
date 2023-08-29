npm init
npm install joi
npm install express
npm install --save-dev @types/express
npm install --save-dev prisma
npm install winston
npm install bcrypt
npm install --save-dev @types/bcrypt
npm install uuid
npm install --save-dev @types/uuid
npm install --save-dev jest @types/jest
npm install --save-dev babel-jest @babel/preset-env
npm install --save-dev supertest @types/supertest

(in package.json, add)
    "scripts": {
        "test": "jest -i"
    },
    "jest": {
        "transform": {
        "^.+\\.[t|j]sx?$": "babel-jest"
        }
    },

(in babel.config.json)
    {
        "presets": [
            "@babel/preset-env"
        ]
    }

(for database credentials, add)
    DB_HOST = "localhost"
    DB_PORT = 3306
    DB_USERNAME = "root"
    DB_PASSWORD = "mysql"
    DB_NAME = "nodejs_restful_api"

npx prisma init
(change the credentials to match in DATABASE_URL var in .env created by prisma)

npx prisma migrate dev --create-only