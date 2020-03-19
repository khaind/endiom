import { Request, Response } from "express";
import { getRepository, getConnection } from "typeorm";
import { validate } from "class-validator";
import { Idiom } from "../entity/Idiom";

class IdiomController {
  static getAll = async (req: Request, res: Response) => {
    const idiomRepo = getRepository(Idiom);
    const idioms = await idiomRepo.find({});

    res.send(idioms);
  }

  static getOneById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const idiomRepo = getRepository(Idiom);

    try {
      const idiom = await idiomRepo.findOneOrFail(id, {});

      res.send(idiom);
    } catch (error) {
      console.error(JSON.stringify(error));
      res.status(404).send("Idiom not found");
    }
  }

  static getOneRandom = async (req: Request, res: Response) => {
    try {
      const idiom = await getConnection()
        .createQueryBuilder(Idiom, "idiom")
        .orderBy("RAND()")
        .getOne()

      res.send(idiom);
    } catch (error) {
      console.error(JSON.stringify(error));
      res.status(404).send("Idiom not found");
    }
  }

  static createIdiom = async (req: Request, res: Response) => {
    console.log('create idiom');

    res.send('TBU');
  }

  static updateIdiom = async (req: Request, res: Response) => {
    console.log('update idiom');

    res.send('TBU');
  }

  static deleteIdiom = async (req: Request, res: Response) => {
    console.log('delete idiom');

    res.send('TBU');
  }
}

export default IdiomController;