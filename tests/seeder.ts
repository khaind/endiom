// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
import { generateUser, generateIdiom } from './fakerHelper';

const numOfUser = parseInt(process.env.NUM_OF_USER_SEED as string);
const numOfIdiom = parseInt(process.env.NUM_OF_IDIOM_SEED as string);

// eslint-disable-next-line prefer-const
let generateSet = [];
for (let i = 0; i < numOfUser; i++) {
  // console.log(`user: ${JSON.stringify(generateUser(i), null, ' ')}`);
  generateSet.push(generateUser(i));
}

for (let i = 0; i < numOfIdiom; i++) {
  // console.log(`idiom: ${JSON.stringify(generateIdiom(i), null, ' ')}`);
  generateSet.push(generateIdiom(i));
}

fs.writeFile(
  __dirname + '/dataseed.json',
  JSON.stringify(generateSet, null, ' '),
  () => {
    console.log('Generate seed data successful');
  },
);

