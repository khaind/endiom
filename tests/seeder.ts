require("dotenv").config();
import {generateUser, generateIdiom} from "./fakerHelper";

const numOfUser = parseInt(process.env.NUM_OF_USER_SEED as string);
const numOfIdiom = parseInt(process.env.NUM_OF_IDIOM_SEED as string);

for (let i = 0; i < numOfUser; i++){
  console.log(`user: ${JSON.stringify(generateUser(), null, ' ')}`);
}

for (let i = 0; i < numOfIdiom; i++){
  console.log(`idiom: ${JSON.stringify(generateIdiom(), null, ' ')}`);
}
