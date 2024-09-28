import axios from 'axios';
import { MinigameResponse } from 'types/MinigameResponse.type';

export const getMinigames = async (): Promise<MinigameResponse> => {
  const response = await axios.get<MinigameResponse>(
    `http://43.200.137.183:8080/api/v1/mini-game/`,
  );
  return response.data;
};
