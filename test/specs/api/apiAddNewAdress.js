import superagent from "superagent";
import { Chance } from "chance";
import {expect} from "chai";

let chance = new Chance();
let country = chance.country();
let fullName = chance.first();
let mobileNum = chance.phone({ formatted: false });
let zipCode = chance.zip();
let streetAddress = chance.address();
let city = chance.city();
let requestBody = { country, fullName, mobileNum, zipCode, streetAddress, city, };

describe("Api test", () => {
  it("should add new address", async () => {
    const response = await superagent
      .post("http://localhost:3000/api/Addresss/")
      .send(requestBody)
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjUsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ1c2VyMTAzQHRlc3QuY29tIiwicGFzc3dvcmQiOiI0NmY5NGM4ZGUxNGZiMzY2ODA4NTA3NjhmZjFiN2YyYSIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIwLjAuMC4wIiwicHJvZmlsZUltYWdlIjoiL2Fzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMTItMjIgMDc6MDA6MTQuNTc3ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMjIgMDc6MDA6MTQuNTc3ICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTY0MDE1NjQyNywiZXhwIjoxNjQwMTc0NDI3fQ.e-_69_YW7s0eOa78rwKHJq52IdxYmFokz3aMswvxVQ7xhUXJBvnQyYFhSrFDKjVfHiZBeULFLkZqh9M33HGST8PmhHxeOOOkc7_pARPcl8wqylx2P7nKVMEjmBi74DsjMLdJRSLLQ53ndK-GmDzHFgUde0-VeV32ugs07n3TM1Q");
    expect(response.statusCode).to.be.equal(201);
  });
});
