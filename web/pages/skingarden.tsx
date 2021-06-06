import classnames from "classnames";
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { Artist } from "../components/skingarden/artist";
import { Link } from "../components/skingarden/link";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Image src="/SGLogo.png" alt="decorative arc" height="200" width="222" />
  );
};

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classnames("p-5 text-center", className)}>
      <div className="text-center flex flex-col">
        <div>
          <Logo className="mb-6" />
        </div>
        <Link className="text-lg uppercase" href="/" target="_blank">
          Output Field
        </Link>
        <div className="uppercase text-lg">Debut showcase</div>
      </div>
    </div>
  );
};

const DaySubheader: React.FC = ({ children }) => {
  return <h3 className="text-lg font-bold pb-1">{children}</h3>;
};

const Quote = () => (
  <>
    You will be organized, you will be an organism, you will articulate your
    body—otherwise you're just depraved.
  </>
);

const Day: React.FC<{
  className?: string;
  day: string;
  date: string;
  time: string;
  rsvpLink: string;
  room: ReturnType<React.FC>;
  happening: ReturnType<React.FC>;
  who: ReturnType<React.FC>;
  description: ReturnType<React.FC>;
}> = ({
  className,
  day,
  date,
  time,
  room,
  happening,
  rsvpLink,
  who,
  description,
}) => {
  return (
    <div className={classnames("", className)}>
      <div className="pb-6">
        <div className="font-serif italic text-gray-700 pb-2 text-base">
          {day}
        </div>
        <div className="font-serif italic text-4xl pb-2">
          {date}
          <span className="text-base pl-4">{time}</span>
        </div>
        {/* <a className="bg-blue-400 mb-6 text-lg px-4 py-2 text-white rounded-sm">RSVP</a>
        <br/> */}
        <Link className="text-lg mb-6" href={rsvpLink} target="_blank">
          RSVP
        </Link>
      </div>
      <div className="h-24 text-md leading-snug">
        <DaySubheader>What Room is Opening?</DaySubheader>
        {room}
      </div>
      <div className="h-24 text-md leading-snug">
        <DaySubheader>What else is Happening?</DaySubheader>
        {happening}
      </div>
      <div className="h-20 text-md leading-snug">
        <DaySubheader>Where?</DaySubheader>
        <div>Find zoom code in the Lobby</div>
      </div>
      <div className="h-20 sm:h-28 text-md leading-snug">
        <DaySubheader>Who?</DaySubheader>
        {who}
      </div>
      <div className="text-md leading-snug">{description}</div>
    </div>
  );
};

const Wednesday: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Day
      className={classnames("", className)}
      day="Wednesday"
      time="2PM PST"
      date="6/16"
      rsvpLink="https://skingarden-day1.splashthat.com/"
      room={<div>Skin Garden Lobby & Walk-ins Welcome</div>}
      happening={<div>DJ sets hosted by bien agiter</div>}
      who={<div>Soft Matter, Online Threat, & more</div>}
      description={
        <div>
          Get acquainted with the Skin Garden lobby. This will be our living
          room for the next three days. Some of our artist friends will be
          streaming some mixes over Zoom. Zoom code will be in the New Art City
          space
        </div>
      }
    />
  );
};

const Thursday: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Day
      className={classnames("", className)}
      day="Thursday"
      date="6/17"
      time="9AM PST"
      rsvpLink="https://skingarden-day2.splashthat.com/"
      room={<div>Bodies Unhinge</div>}
      happening={<div>Panel Discussion, Q&A</div>}
      who={<div>Betty Apple, IOR50, Venus in Foil</div>}
      description={
        <div>
          Tune in to hear the approach behind the room, Bodies Unhinge. The
          artists behind the space discuss the process behind articulating queer
          affect, through breath, movement, voice. There will be a Q&A at the
          end.
        </div>
      }
    />
  );
};

const Friday: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Day
      className={classnames("", className)}
      day="Friday"
      date="6/18"
      time="11AM PST"
      rsvpLink="https://skingarden-day3.splashthat.com/"
      room={<div>Reconsider Flesh</div>}
      happening={<div>Streaming theory about bodies</div>}
      who={<div>TBA</div>}
      description={
        <div>
          We will be broadcasting some literature and theory that inspired the
          concept behind Reconsider Flesh, namely the soundscape. Tune in to
          hear thoughts on our relationship with bodies, and the plurality they
          carry with them.
        </div>
      }
    />
  );
};

const RsvpContent: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div id="schedule" className={classnames(className)}>
      {/*       <div
        className="grid
        gap-y-20 lg:gap-x-16 lg:gap-y-12
        lg:grid-auto-rows grid-cols-1 lg:grid-cols-rsvp
        px-6 sm:px-0 sm:max-w-sm lg:max-w-none"
      > */}
      <div
        className="grid
        gap-y-20 lg:gap-x-16 lg:gap-y-12
        lg:grid-auto-rows grid-cols-1 lg:grid-cols-rsvp
        px-6 sm:px-0 sm:max-w-xl lg:max-w-none"
      >
        <Wednesday className="" />
        <Thursday className="" />
        <Friday className="" />
        <div className="lg:col-span-2">
          <div className="font-serif text-4xl italic">
            We’re raising funds for the featured artists. Donate to nourish the
            underground!
          </div>
        </div>
        <div className="">
          <div className="text-center mt-3">
            <SignUpButton
              buttonText="Donate"
              handleClick={() => {
                window.open("/donate");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NewTitle: React.FC = () => {
  return (
    <div>
      <code className="uppercase text-sm text-gray-200">
        Output Field's debut showcase
      </code>
      <div className="text-white font-serif mt-8 mb-2 text-5xl">
        Skin Garden
      </div>
      <code className="text-right w-full">
        <div className="font-serif text-gray-200">reconsider flesh</div>
      </code>
    </div>
  );
};

const NewHeader: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 text-white pt-20 pb-10 sm:pb-20 px-8">
      <div className="flex justify-center">
        <NewTitle />
      </div>

      <div className="pt-20 sm:pt-28 font-serif text-xl text-center">
        Wed 6/16 - Fri 6/18
      </div>
      <div className="pt-4 flex justify-center">
        <button className="bg-blue-400 sm:w-auto text-white px-5 py-2 text-xl rounded-sm w-full">
          RSVP
        </button>
      </div>
      <div className="pt-4 flex justify-center space-x-2">
        <a href="#schedule" className="w-20 py-1 text-md rounded-sm border border-opacity-100 text-white border-white text-center">
          Schedule
        </a>
        <a href="#artists" className="w-20 py-1 text-md rounded-sm border border-opacity-100 text-white border-white text-center">
          Artists
        </a>
        {/* <button className="w-16 py-1 border-white">
          Artists
        </button>
        <button className="w-16 py-1 border-white rounded-sm text-white">
          Calendar
        </button> */}
      </div>
    </div>
  );
};


const Artists: React.FC = () => {
  return (
    <div className="flex justify-center pt-12">
      <div className="flex-1 max-w-3xl px-6">
        <div id="artists" className="font-serif text-3xl pb-6">
          The Artists
        </div>
        <Artist className="pb-16" />
        <Artist className="pb-16" />
        <Artist className="pb-16"/>
        <Artist className="pb-16" />
      </div>
    </div>
  );
};

const SkinGarden = () => {
  return (
    <div className="text-black bg-gray-100">
      <NewHeader />
      <div className="bg-gray-100 min-h-screen flex justify-center xl:pt-20">
        <div className="container pb-10">
          <div className="flex justify-center">
            <div
              className="grid gap-10
          grid-cols-1 grid-auto-rows
          xl:grid-rows-1 xl:grid-auto-cols"
            >
              <Header className="xl:row-start-1 xl:col-start-1 xl:w-64" />
              <RsvpContent className="xl:row-start-1 xl:col-start-2 " />
            </div>
          </div>
        </div>
      </div>
      <Artists />
    </div>
  );
};

export default SkinGarden;
