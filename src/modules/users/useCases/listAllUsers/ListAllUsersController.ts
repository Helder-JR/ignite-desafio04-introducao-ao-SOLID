import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  private listAllUsersUseCase: ListAllUsersUseCase;

  constructor(listAllUsersUseCase: ListAllUsersUseCase) {
    this.listAllUsersUseCase = listAllUsersUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.get("user_id");

      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(allUsers);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
