const request = require("supertest");
const app = require("../src/app");

describe("Testes da API", () => {

    test("GET / deve retornar mensagem da API", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body.mensagem)
            .toBe("API funcionando com Jenkins");
    });

    test("GET /status deve retornar online", async () => {
        const response = await request(app).get("/status");

        expect(response.statusCode).toBe(200);

        expect(response.body.status)
            .toBe("online");
    });

    test("GET /usuarios deve retornar uma lista", async () => {
        const response = await request(app).get("/usuarios");

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body))
            .toBe(true);
    });

});