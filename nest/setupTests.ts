import * as DotENV from 'dotenv';

const testEnvPath = `${process.cwd()}/.test.env`;
DotENV.config({ path: testEnvPath });
