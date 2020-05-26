import NodeFormat from '../src/NodeFormat';
import { expect } from 'chai';

describe('The NodeFormat class', function() {
  it('should read ini files', function(done) {
    const format = new NodeFormat();

    const promise = format.read('./tests/fixtures/test.ini');

    promise.then((data: object) => {
      expect(data["section_one"]["dword_value"]).equal("string");
      expect(data["section_one"]["int_value"]).equal('32');
      done();
    }).catch((error: object) => {
      done(error);
    });
  });
});
