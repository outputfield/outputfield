import React, {useEffect} from 'react';
import Router from 'next/router';
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";

const Curate = (props) => {
  const { pageData } = props;

  useEffect(() => {
    Router.push(pageData.curate);
  });

  return (
    null
  );
}

Curate.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("Frontpage");
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event);
  }
};

export default Curate;
