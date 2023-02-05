import React, {useEffect} from 'react';
import Router from 'next/router';
import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";

const Volunteer = (props) => {
  const { pageData } = props;

  useEffect(() => {
    // Temp, for Sep 1st 2022 BAMPFA talk
    Router.push('https://www.notion.so/outputfield/Join-our-Team-Volunteer-f00fa9f7f30545b49e577b1aec897ab2')

    // Router.push(pageData.volunteer);
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
    if (event instanceof Error) throw getErrorMessage(event);
  }
};

export default Volunteer;
