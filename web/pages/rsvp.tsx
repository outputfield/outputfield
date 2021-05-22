import classnames from "classnames";
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";

const Link: React.FC<{ className?: string }> = ({ className, children }) => {
  const color = "#0404FF";
  return (
    <a
      className={classnames(
        "text-lg font-semibold filter drop-shadow-2xl",
        className
      )}
      style={{
        color: "rgb(4, 4, 255)",
        textShadow: `0 0 2px rgba(4, 4, 255, 0.4)`,
      }}
    >
      {children}
    </a>
  );
};

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classnames("h-40", className)}>
      <div className="relative top-10  flex justify-center">
        <div className="font-serif italic text-xl w-min">Skin Garden</div>
      </div>

      <div className="relative -top-16">
        <Image
          src="/rsvp-deco.png"
          alt="decorative arc"
          height="200"
          width="222"
        />
      </div>
    </div>
  );
};

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classnames("p-5 text-center", className)}>
      <Logo className="mb-6" />
      <Link className="uppercase">Output Field</Link>
      <div className="uppercase text-lg">Debut showcase</div>
    </div>
  );
};

const DaySubheader: React.FC = ({ children }) => {
  return <h3 className="text-lg font-bold pb-1">{children}</h3>;
};

const Day: React.FC<{
  className?: string;
  date: string;
  room: ReturnType<React.FC>;
  happening: ReturnType<React.FC>;
  when: ReturnType<React.FC>;
  who: ReturnType<React.FC>;
  description: ReturnType<React.FC>;
}> = ({ className, date, room, happening, when, who, description }) => {
  return (
    <div className={classnames("max-w-xs", className)}>
      <div className="pb-6">
        <div className="font-serif italic text-4xl">{date}</div>
        <Link className="mb-6">RSVP</Link>
      </div>
      <div className="h-28 text-lg">
        <DaySubheader>What Room is Opening?</DaySubheader>
        {room}
      </div>
      <div className="h-28 text-lg">
        <DaySubheader>What else is Happening?</DaySubheader>
        {happening}
      </div>
      <div className="h-20 text-lg">
        <DaySubheader>When?</DaySubheader>
        {when}
      </div>
      <div className="h-28 text-lg">
        <DaySubheader>Who?</DaySubheader>
        {who}
      </div>
      <div className="text-lg">{description}</div>
    </div>
  );
};

const Wednesday: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Day
      className={classnames("", className)}
      date="6/16"
      room={<div>Skin Garden Lobby & Walk-ins Welcome</div>}
      happening={<div>DJ sets hosted by Bien Agiter</div>}
      when={<div>3PM PST on Wednesday</div>}
      who={<div>Soft Matter, Online Threat, +</div>}
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
      date="6/17"
      room={<div>Bodies Unhinge</div>}
      happening={<div>Panel Discussion, Q&A</div>}
      when={<div>9AM PST on Thursday</div>}
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
      date="6/18"
      room={<div>Reconsider Flesh</div>}
      happening={<div>Listening Session (Theory for context)</div>}
      when={<div>11AM on Wednesday</div>}
      who={<div>TBA+</div>}
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

const Rsvp = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center pt-10">
      <div className="container">
        <div className="grid grid-cols-rsvp gap-10">
          <Header className="col-span-1 row-span-1" />
          <Wednesday className="col-span-1 row-span-1 col-start-2" />
          <Thursday className="col-span-1 row-span-1 col-start-3" />
          <Friday className="col-span-1 row-span-1 col-start-4" />
          <div className="col-span-2 row-span-1 col-start-2 row-start-2">
            <div className="font-serif text-4xl italic">
              We’re raising funds for the featured artists. Donate to nourish
              the underground!
            </div>
          </div>
          <div className="col-span-1 row-span-1 col-start-4 row-start-2">
            <div className="text-center">
              <SignUpButton buttonText="Donate"></SignUpButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
