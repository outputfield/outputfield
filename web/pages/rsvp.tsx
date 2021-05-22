import classnames from "classnames";
import React from "react";
import "tailwindcss/tailwind.css";

const Link: React.FC<{ className: string }> = ({ className, children }) => {
  return <a className={classnames('text-blue-500 font-semibold', className)}>{children}</a>
} 

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={classnames("p-5 text-center", className)}>
    <div className="font-serif italic text-xl">
      Skin Garden
    </div>

    <Link className="uppercase">Output Field</Link>
    <div className="uppercase">Debut showcase</div>
  </div>;
};

const DaySubheader: React.FC = ({ children }) => {
  return <h3 className="font-bold">{children}</h3>;
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
    <div className={classnames("bg-gray-300", className)}>
      <div className="font-serif italic text-4xl">{date}</div>
      <div className="text-blue-500 font-semibold">RSVP</div>
      <div className="h-24">
        <DaySubheader>What Room is Opening?</DaySubheader>
        {room}
      </div>
      <div className="h-24">
        <DaySubheader>What else is Happening?</DaySubheader>
        {happening}
      </div>
      <div className="h-24">
        <DaySubheader>When?</DaySubheader>
        {when}
      </div>
      <div className="h-24">
        <DaySubheader>Who?</DaySubheader>
        {who}
      </div>
      <div>{description}</div>
    </div>
  );
};

const Rsvp = () => {
  return (
    <div className="flex justify-center">
    <div className="container">
      <div className="grid gap-5">
        <Header className="col-span-1 row-span-1 bg-gray-300" />
        <Day
          className="col-span-1 row-span-1 col-start-2"
          date="6/16"
          room={<div>Skin Garden Lobby & Walk-ins Welcome</div>}
          happening={<div>DJ sets hosted by Bien Agiter</div>}
          when={<div>3PM PST on Wednesday</div>}
          who={<div>Soft Matter, Online Threat, +</div>}
          description={
            <div>
              Get acquainted with the Skin Garden lobby. This will be our living
              room for the next three days. Some of our artist friends will be
              streaming some mixes over Zoom. Zoom code will be in the New Art
              City space
            </div>
          }
        />
        <Day
          className="col-span-1 row-span-1 col-start-3"
          date="6/17"
          room={<div>Bodies Unhinge</div>}
          happening={<div>Panel Discussion, Q&A</div>}
          when={<div>9AM PST on Thursday</div>}
          who={<div>Betty Apple, IOR50, Venus in Foil</div>}
          description={
            <div>
              Tune in to hear the approach behind the room, Bodies Unhinge. The
              artists behind the space discuss the process behind articulating
              queer affect, through breath, movement, voice. There will be a Q&A
              at the end.
            </div>
          }
        />
        <Day
          className="col-span-1 row-span-1 col-start-4"
          date="6/18"
          room={<div>Reconsider Flesh</div>}
          happening={<div>Theory Listening Session (context)</div>}
          when={<div>11AM on Wednesday</div>}
          who={<div>TBA+</div>}
          description={
            <div>
              We will be broadcasting some literature and theory that inspired
              the concept behind Reconsider Flesh, namely the soundscape. Tune
              in to hear thoughts on our relationship with bodies, and the
              plurality they carry with them.
            </div>
          }
        />
        <div className="col-span-2 row-span-1 col-start-2 row-start-2 bg-gray-300 font-serif text-5xl italic">
          We’re raising funds for the featured artists. Donate to nourish the
          underground!
        </div>
        <div className="col-span-1 row-span-1 col-start-4 row-start-2 bg-gray-300">
          <button className="uppercase">Donate</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Rsvp;
