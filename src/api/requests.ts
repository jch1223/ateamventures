import { API_SERVER } from "../config";

interface EstimateType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export const getEstimates = async () => {
  const response = await fetch(`${API_SERVER}/requests`);

  if (!response.ok) {
    throw new Error("api 요청 실패");
  }

  const result: EstimateType[] = await response.json();

  return result;
};
