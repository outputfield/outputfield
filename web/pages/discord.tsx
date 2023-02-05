import React, {useEffect} from 'react';
import Router from 'next/router';
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";

const Discord = (props) => {
  const { pageData } = props;

  useEffect(() => {
    Router.push(pageData.discord);
  });

  return (
    null
  );
}

Discord.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("Frontpage");
    return { pageData }
  } catch (event) {
    if (event instanceof Error) throw getErrorMessage(event);
  }
};

export default Discord;
