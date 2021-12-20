import superagent from "superagent";
import { Chance } from "chance";

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
    const request = await superagent
      .post("http://localhost:3000/api/Addresss/")
      .send(requestBody)
      .set(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIiwicGFzc3dvcmQiOiI0NmY5NGM4ZGUxNGZiMzY2ODA4NTA3NjhmZjFiN2YyYSIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIwLjAuMC4wIiwicHJvZmlsZUltYWdlIjoiL2Fzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMTItMjAgMDg6NTk6MzUuMjUzICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMjAgMDg6NTk6MzUuMjUzICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTYzOTk5MTA1OCwiZXhwIjoxNjQwMDA5MDU4fQ.l57n2V_SPqp7pJRzT7E4SYqLBlyQUajODCySLHmdEVLAdKXwYG5MKsCjsepAlMFphl7OBUbUQeUoqvf78pJyflVTq7F1yCAUwIxc-FWP9Td4fEnTTq32hgyZvsOVK69FFOj1oTtG0jv76KnbN5fuwH1q5MwcAw-iomufIIZIAPE"
      );
    await expect(request.statusCode == 201);

    //need to do expect part
  });
});
