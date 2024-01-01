import request from "supertest";

describe("hmm-api", () => {
  it("should not be null", () => {
    expect(true).toBeTruthy();
  });

  it("should return 200", async () => {
    const response = await request("http://localhost:3000").get("/");
    expect(response.status).toBe(200);
  });
});
