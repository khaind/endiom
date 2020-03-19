require("dotenv").config();
import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../entity/User";

export class CreateAdminUser1584283714774 implements MigrationInterface {

  public async up (queryRunner: QueryRunner): Promise<any> {
    console.log(`CreateAdminUser1584283714774 start`)
    let user = new User();
    user.userName = process.env.ADMIN_USER_NAME as string;
    user.password = process.env.ADMIN_USER_PASS as string;
    user.hashPassword();
    user.email = process.env.ADMIN_USER_EMAIL as string;

    const userRepo = getRepository(User);
    await userRepo.save(user);
    console.log(`CreateAdminUser1584283714774 end`)
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    console.log(`CreateAdminUser1584283714774 down start`)
    const userRepo = getRepository(User);
    const admin = await userRepo.find({
      userName: process.env.ADMIN_USER_NAME as string
    })
    await userRepo.remove(admin);
    console.log(`CreateAdminUser1584283714774 down end`)
  }

}
