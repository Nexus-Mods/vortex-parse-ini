import { mkdtempSync, readFileSync, rmdirSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

import { IChanges } from '../src/IChanges';
import NodeFormat from '../src/NodeFormat';
import { expect } from 'chai';

describe('The NodeFormat class', function() {
  let tempDir: string;

  before(function() {
    const dirPath = join(tmpdir(), 'vortex-ini-parser');
    tempDir = mkdtempSync(dirPath);
  });

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

  it('should write ini files', function(done) {
    const format = new NodeFormat();
    const filePath = join(tempDir, 'file.ini');

    const data: object = {
      section_one: {
        dword_value: "string",
        int_value: 32
      }
    };
    const changes: IChanges = {
      added: [],
      removed: [],
      changed: []
    };

    format.write(filePath, data, changes).then(function() {
      const contents = readFileSync(filePath);

      expect(String(contents)).equal("[section_one]\ndword_value=string\nint_value=32\n");
      done();
    });
  });

  after(function() {
    rmdirSync(tempDir, { recursive: true });
  });
});
