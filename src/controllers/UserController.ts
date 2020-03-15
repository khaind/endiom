import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {validate} from "class-validator";
import {User} from "../entity/User";

class UserController {
  static getAll = async (req: Request, res: Response) => {
    const userRepo = getRepository(User);
    const users = await userRepo.find({
      select: ["id", "userName", "email"]
    })

    res.send(users);
  }

  static getOneById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const userRepo = getRepository(User);

    try {
      const user = await userRepo.findOneOrFail(id, {
        select: ["id", "userName", "email"]
      });
      res.send(user);
    } catch (error) {
      console.error(JSON.stringify(error));
      res.status(404).send("User not found");
    }
  }

  static createUser = async (req: Request, res: Response) => {
    console.log('create user by id');

    res.send('TBU');
  }

  static updateUser = async (req: Request, res: Response) => {
    console.log('update user by id');

    res.send('TBU');
  }

  static deleteUser = async (req: Request, res: Response) => {
    console.log('delete user by id');

    res.send('TBU');
  }
}

export default UserController;