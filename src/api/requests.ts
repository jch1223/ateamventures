import { API_SERVER } from "../config";

export const getEstimates = async () => {
  const response = await fetch(`${API_SERVER}/requests`);

  if (!response.ok) {
    throw new Error("api 요청 실패");
  }

  return await response.json();
};
