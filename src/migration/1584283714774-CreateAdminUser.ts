require("dotenv").config();
import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {User} from "../entity/User";

export class CreateAdminUser1584283714774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.userName = process.env.ADMIN_USER_NAME as string;
        user.password = process.env.ADMIN_USER_PASS as string;
        user.hashPassword();
        user.email = process.env.ADMIN_USER_EMAIL as string;

        const userRepo = getRepository(User);
        await userRepo.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
