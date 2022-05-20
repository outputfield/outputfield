import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { getErrorMessage } from "../api-client/errors";
import styles from "../components/live/live.module.scss";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { getPageContent } from "./api/page-content";

declare module "react" {
  interface IframeHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    frameborder?: any;
    allowfullscreen?: any;
  }
}

interface Credit {
  role?: string;
  name?: string;
  link?: string;
  contributors?: [
    { name: string; link: string },
    { name: string; link: string }
  ];
}

const Contributor: React.FC<{ role?: string; name: string; link: string }> = ({
  role,
  link,
  name,
}) => {
  return (
    <>
      {role && `${role}: `}
      <a href={link}>{name}</a>
      <br />
    </>
  );
};
const DoubleContributor: React.FC<{
  role?: string;
  contributor1: { name: string; link: string };
  contributor2: { name: string; link: string };
}> = ({ role, contributor1, contributor2 }) => {
  return (
    <>
      {role && `${role}: `}
      <a href={contributor1.link}>{contributor1.name}</a> &{" "}
      <a href={contributor2.link}>{contributor2.name}</a>
      <br />
    </>
  );
};

const Credits: React.FC = () => {
  const credits: Credit[] = [
    {
      role: "Writing by",
      name: "Val Leya You",
      link: "https://www.instagram.com/val.erieyou/",
    },
    {
      role: "Animation by",
      name: "Val Leya You",
      link: "https://www.instagram.com/val.erieyou/",
    },
    {
      role: "Commissioned by",
      contributors: [
        {
          name: "Tour de Moon",
          link: "https://tourdemoon.com/",
        },
        {
          name: "Output Field",
          link: "https://www.instagram.com/output.field/",
        },
      ],
    },
    {
      role: "Transcript",
      name: "Click Here",
      link: "/pofc-transcript",
    },
    {
      role: "Citations",
      name: "Click Here",
      link: "/pofc-citations",
    },
  ];
  return (
    <div className={styles.detailcredit}>
      {credits.map(({ role, name, link, contributors }) =>
        name && link ? (
          <Contributor
            key={`${role}-${name}`}
            role={role}
            name={name}
            link={link}
          />
        ) : contributors?.[0] && contributors?.[1] ? (
          <DoubleContributor
            key={`${role}-${name}`}
            role={role}
            contributor1={contributors[0]}
            contributor2={contributors[1]}
          />
        ) : null
      )}
    </div>
  );
};

const Live = (props) => {
  const { pageData } = props;

  const [live, setLive] = useState(pageData.live);
  const liveRef = useRef(live);
  const [message, setMessage] = useState("");
  const messageRef = useRef(message);

  let donation = false;
  const donationtimer = useRef(null) as any;
  const video = useRef(null) as any;

  function init() {
    startDonation();
  }

  function startDonation() {
    if (!donation) {
      setTimeout(() => {
        updateDonation();
        donationtimer.current = setInterval(() => {
          updateDonation();
        }, 15000);
      }, 2500);
      donation = true;
    }
  }

  async function updateDonation() {
    const parse = require("html-react-parser");
    const r = (await getPageContent("live")) as any;
    let m = "";
    if (r.message && r.message != "") {
      m = parse(
        r.message
          .map((t, i) => {
            return t.split("\n").join("<br/>");
          })
          .join("<br/>")
      );
    }
    setMessage(m);
    messageRef.current = m;
    if (r.live != liveRef.current) {
      setLive(r.live);
      liveRef.current = r.live;
    }
  }

  useEffect(() => {
    window.addEventListener("load", init);

    return () => {
      window.removeEventListener("load", init);
    };
  });

  const meta_title = "Output Field";
  const meta_description = "Powers of Cringe";
  const meta_canonical = "https://outputfield.com/powersofcringe";
  const meta_image =
    "https://outputfield.com/powersofcringe/tourdemoon-x-outputfield.png";

  return (
    <div className={styles.root}>
      <Head>
        <title>Powers of Cringe - Output Field</title>
        <style>{"html,body,#__next { background-color: #e5e5e5; }"}</style>
        <meta property="og:title" content={meta_title} />
        <meta name="twitter:title" content={meta_title} />
        <meta itemProp="name" content={meta_title} />
        <link rel="canonical" href={meta_canonical} />
        <meta property="og:url" content={meta_canonical} />
        <meta name="description" content={meta_description} />
        <meta itemProp="description" content={meta_description} />
        <meta property="og:description" content={meta_description} />
        <meta name="twitter:description" content={meta_description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:image" content={meta_image} />
        <meta property="og:image" content={meta_image} />
        <meta itemProp="image" content={meta_image} />
        <meta property="og:image:alt" content={meta_title} />
        <link
          rel="shortcut icon"
          href="https://outputfield.com/meta/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://outputfield.com/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://outputfield.com/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://outputfield.com/meta/meta/favicon-16x16.png"
        />
      </Head>
      <div className={styles.grid}>
        {/* {message != "" ? (
          <div className={styles.donation}>{message}</div>
        ) : (
          <div className={styles.icon}>
            <a href="../">
              <img src="live/favicon.png" />
              <br />
              Output Field
            </a>
          </div>
        )} */}
        <div className={styles.icon}>
          <a href="../">
            <img src="live/favicon.png" />
            <br />
            Output Field
          </a>
        </div>
        <div className={styles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eM3NVbiQQdA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/*         
          {live == true ? (
            <iframe
              ref={video}
              width="100%"
              height="100%"
              src="https://youtu.be/eM3NVbiQQdA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <div className={styles.image}>
              <img
                className={styles.illustration}
                src="powersofcringe/tourdemoon-x-outputfield.png"
              />
            </div>
          )} */}
        </div>
        <div className={styles.detailgrid}>
          <div className={styles.detailtitle}>
            Powers of Cringe: An Essay on Aesthetics of Degradation
          </div>

          <div className={styles.detaildescription}>
            Bad taste has been used in the work of queer artists such as Paul
            Morrissey and John Waters, as an affront to polite society in the
            struggle for marginal visibility. However, in today’s climate of
            overdriven self-curation, minor divergences from the norm are
            cringeworthy. Bad taste is accepted as edgy online branding, but
            cringey branding is anathema. Anything seems acceptable, but
            everything is vulnerable to becoming cringe. Is cringe collateral
            for progressiveness, and if so, are artists who reclaim cringe
            performing the zenith of self-acceptance?
            <br />
            <br />
            This video essay formally explicates cringe aesthetics in internet
            culture. It attempts an aerial view at cringe, using art history and
            post- marxist frameworks to account for how cringe emerged in
            today’s technological paradigm.
            <br />
            <br />
            Output Field is 501(c)3 non-profit calling for the redistribution of
            clout. We are building a placeless coalition of experimental
            artists, curators, & spaces. Support more projects like this by
            donating to our organization.
          </div>
          <Credits />
          <div className={styles.detailbutton}>
            <a href="/donate" target="_blank">
              <SignUpButton className={"livepage"} buttonText="DONATE" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Live.getInitialProps = async function (context) {
  try {
    const pageData = await getPageContent("live");
    return { pageData };
  } catch (event) {
    throw getErrorMessage(event as any);
  }
};

export default Live;
