import axios from "axios";


export interface PageContentRequest {
  page: string;
}

export interface PageContentResponse{
  data: JSX.Element;
}

export const getPageContent = async (request: PageContentRequest) => {
  const response = await axios.get("api/page-content",{params:{page:request.page}});
  return response.data as PageContentResponse;
};
