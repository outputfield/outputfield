import axios from "axios";


export interface PageContentRequest {
  page: string;
}

export interface PageContentResponse{
  data: JSX.Element;
}

export const getPageContent = async (request: PageContentRequest) => {
  const response = await axios.post("api/page-content", request);
  return response.data as PageContentResponse;
};
