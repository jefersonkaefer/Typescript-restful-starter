import { getCustomRepository } from "typeorm";
import { IRepository } from "../interfaces/IRepository";

export abstract class BaseService {
  constructor(private Repository: IRepository) {}
}
