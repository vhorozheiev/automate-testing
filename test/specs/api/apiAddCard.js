import superagent from "superagent";
import { Chance } from "chance";
import { expect } from "chai";
let chance = new Chance();

let cardNum = chance.cc({ type: "Mastercard" });
let expMonth = Math.floor(Math.random() * 12) + 1;
let fullName = chance.first();
let expYear = Math.floor(Math.random() * (2099 - 2080 + 1)) + 2080;
let requestBody = { cardNum, expMonth, expYear, fullName };
describe("Api test", () => {
  it("should add new card", async () => {
    const response = await superagent
      .post("http://localhost:3000/api/Cards/")
      .send(requestBody)
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjUsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ1c2VyMTAzQHRlc3QuY29tIiwicGFzc3dvcmQiOiI0NmY5NGM4ZGUxNGZiMzY2ODA4NTA3NjhmZjFiN2YyYSIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIwLjAuMC4wIiwicHJvZmlsZUltYWdlIjoiL2Fzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMTItMjIgMDc6MDA6MTQuNTc3ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMjIgMDc6MDA6MTQuNTc3ICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTY0MDE1NjQyNywiZXhwIjoxNjQwMTc0NDI3fQ.e-_69_YW7s0eOa78rwKHJq52IdxYmFokz3aMswvxVQ7xhUXJBvnQyYFhSrFDKjVfHiZBeULFLkZqh9M33HGST8PmhHxeOOOkc7_pARPcl8wqylx2P7nKVMEjmBi74DsjMLdJRSLLQ53ndK-GmDzHFgUde0-VeV32ugs07n3TM1Q"
      );
    expect(response.statusCode).to.be.equal(201);
  });
});
