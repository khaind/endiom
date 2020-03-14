var faker = require('faker');

const generateUser = () => {
    return {
        userName: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email()
    }
}

const generateIdiom = () => {
    return {
      idiom: faker.lorem.words(),
      meaning: faker.lorem.sentence(),
      origin: faker.lorem.paragraph(),
      example: faker.lorem.paragraph()
      // TODO comments
    }
}

export {generateUser, generateIdiom}