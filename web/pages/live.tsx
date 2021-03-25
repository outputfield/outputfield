import { getErrorMessage } from "../api-client/errors";
import { getPageContent } from "./api/page-content";
import styles from "../components/live/live.module.scss";

const Live = (props) => {
  const { pageData } = props;

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
      <img src="live/outputfieldlive032821.png"/>
      <div>Screening will begin at 11AM PST,<br/>7PM CET on Sunday, March 28.<br/>To donate ahead of time, <a href={pageData.donate} target="_blank">click here</a>.</div>
      </div>
    </div>
  );
}


Live.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("live");
    return { pageData }
  } catch (event) {
    throw getErrorMessage(event);
  }
};

export default Live;
