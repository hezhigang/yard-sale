import React from "react";
import { ActionType, StateInterface } from "../../globalTypes";

export interface FilterProps{
  categories: Array<string>,
  dispatch: React.Dispatch<ActionType>,
  ctx: React.Context<StateInterface>
}