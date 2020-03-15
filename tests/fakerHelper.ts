var faker = require('faker');

const generateUser = (id: number) => {
    return {
        id: id,
        userName: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email()
    }
}

const generateIdiom = (id: number) => {
    return {
      id: id,
      idiom: faker.lorem.words(),
      meaning: faker.lorem.sentence(),
      origin: faker.lorem.paragraph(),
      example: faker.lorem.paragraph(),
      authorId: 1 // admin
      // TODO comments
    }
}

export {generateUser, generateIdiom}