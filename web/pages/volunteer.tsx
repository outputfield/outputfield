import React, {useEffect} from 'react';
import Router from 'next/router';
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";

const Volunteer = (props) => {
  const { pageData } = props;

  useEffect(() => {
    Router.push(pageData.volunteer);
  });

  return (
    null
  );
}

Volunteer.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("Frontpage");
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event);
  }
};

export default Volunteer;
