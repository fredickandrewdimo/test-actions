const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const { expect } = chai;

chai.use(chaiHttp);

describe("API Endpoint Tests", () => {
  it("should return a 200 status code for GET /api/data", (done) => {
    chai
      .request(app)
      .get("/api/data")
      .end((err, res) => {
        if (err) {
          done(err); // Pass any errors to the "done" callback
        } else {
          expect(res).to.have.status(200);
          done();
        }
      });
  });
});
