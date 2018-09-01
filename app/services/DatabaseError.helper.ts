import { QueryFailedError } from "typeorm";
import { ExecException } from "child_process";

export class DatabaseError {
  public static async getMessageError(error: ExecException) {
    return await {
      code: error.code,
      message: await this.getMessage(error.code.toString())
    };
  }
  private static getMessage(code: string) {
    switch (code) {
      case "23505":
        return "Item já está cadastrado.";
      default:
        return code;
    }
  }
}
