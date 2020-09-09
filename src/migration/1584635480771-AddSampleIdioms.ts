import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../entity/User";
import { generateIdiom } from "../../tests/fakerHelper";
import { Idiom } from "../entity/Idiom";

export class AddSampleIdioms1584635480771 implements MigrationInterface {

  public async up (queryRunner: QueryRunner): Promise<any> {
    const userRepo = getRepository(User);
    const idiomRepo = getRepository(Idiom);
    let admin = await userRepo.findOne({ id: 1 });

    const numOfUser = parseInt(process.env.NUM_OF_USER_SEED as string);
    const numOfIdiom = parseInt(process.env.NUM_OF_IDIOM_SEED as string);

    for (let i = 0; i < numOfIdiom; i++) {
      // console.log(`idiom: ${JSON.stringify(generateIdiom(i), null, ' ')}`);
      let seedIdiom = generateIdiom(i);
      let idiom = new Idiom();
      idiom.idiom = seedIdiom.idiom;
      idiom.meaning = seedIdiom.meaning;
      idiom.origin = seedIdiom.origin;
      idiom.sample = seedIdiom.sample;
      idiom.user = admin!;

      await idiomRepo.save(idiom);
    }
    console.log(`successfully migrate ${numOfIdiom} idioms`);
  }

  public async down (queryRunner: QueryRunner): Promise<any> {

  }

}
