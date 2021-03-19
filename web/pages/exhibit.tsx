import React, {useEffect} from 'react';
import Router from 'next/router';
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";

const Exhibit = (props) => {
  const { pageData } = props;

  useEffect(() => {
    Router.push(pageData.exhibition);
  });

  return (
    null
  );
}

Exhibit.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("Frontpage");
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event);
  }
};

export default Exhibit;
