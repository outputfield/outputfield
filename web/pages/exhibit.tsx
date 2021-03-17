import React, {useEffect} from 'react';
import Router from 'next/router';
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";

const Exhibit = (props) => {
  const { pageData } = props;

  useEffect(() => {
    Router.push(pageData.link);
  });

  return (
    null
  );
}

Exhibit.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("exhibit");
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event);
  }
};

export default Exhibit;
