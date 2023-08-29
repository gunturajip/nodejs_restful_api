import { prismaClient } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";
import { web } from "../src/application/web.js";
import supertest from "supertest";


describe('POST /api/users', function () {

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                username: "test"
            }
        })
    })

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'test',
                password: 'rahasia',
                name: 'test'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeUndefined();
    });
})