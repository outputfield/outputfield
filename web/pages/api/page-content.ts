import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ErrorWithMessage } from "../../api-client/errors";
import { PageContentRequest, PageContentResponse } from "../../api-client/page-content";
import { sendError } from "../../api-utilities/send-error";
import client from "../../client";


export const getPageContent = async (name: string) => {
  /**
  queries Sanity data for page of given name and returns array of text fields
  */

  const response = await client.fetch(` *[_type == "page" && title == $name][0].content {"type":_type,"id": label,"text": text[].children[],"value":value,"title":title,"url":image.asset->url}`, { name });

  const reduced = response.map((obj,i)=>{
    let mObj = {images: {}};
    switch(obj.type){
      case "textsection":
        mObj[obj.id] = obj.text.map((o)=>{return o[0].text});
        break;
      case "field":
        mObj[obj.id] = obj.value;
        break;
      case "imageWithTitle":
        mObj.images[obj.title] = obj.url;
    }


    return mObj;
  }).reduce((r,o)=>{
    for(let key of Object.keys(o)){r[key.toLowerCase()]=o[key]};
    return r;
  });

  return reduced;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<PageContentResponse | ErrorWithMessage>
) => {

  if (req.method !== "GET") {
    throw new Error("Only accepts GETs with body of { page: string }");
  }

  const pageContentRequest = req.query.page;

  if (typeof pageContentRequest !== "string") {
    throw new Error("Missing page name");
  }

  try {
    return res.status(200).json(await getPageContent(pageContentRequest));
  } catch (event) {
    return sendError(res, 500, "Failed to query database");
  }
};
