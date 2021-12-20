import superagent from "superagent";
import { Chance } from "chance";
let chance = new Chance();

let cardNum = chance.cc({ type: "Mastercard" });
let expMonth = Math.floor(Math.random() * 12) + 1;
let fullName = chance.first();
let expYear = Math.floor(Math.random() * (2099 - 2080 + 1)) + 2080;
let requestBody = { cardNum, expMonth, expYear, fullName, };
describe("Api test", () => {
  it("should add new card", async () => {
    const request = await superagent
      .post("http://localhost:3000/api/Cards/")
      .send(requestBody)
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoicm9iIiwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIiwicGFzc3dvcmQiOiI0NmY5NGM4ZGUxNGZiMzY2ODA4NTA3NjhmZjFiN2YyYSIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIxMjcuMC4wLjEiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMS0xMi0yMCAwODo1OTozNS4yNTMgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0yMCAxMDoyNzo0Ny4yNTcgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNjM5OTk2ODEzLCJleHAiOjE2NDAwMTQ4MTN9.C3XKeizTyIGT-KH5KUpLPIjOzqabLXt3DEvaQiQQKu0R7iZsRZkvDcChpZLUNiacZwjzIbBlkN4-Lowi80xQeYq3zOq6B8SY301y6HIRSAjKYGpdSIMrQ9ZSsyJUfUhoZw7cL1evw_hXYa38Gb1-xhdcoaDf91puocCNkxtzosk"
      );
    await expect(request.statusCode == 201);
    //need to do expect part
  });
});
