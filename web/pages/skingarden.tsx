import classnames from "classnames";
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { Artist } from "../components/skingarden/artist";
import { SpacedParagraphs } from "../components/skingarden/p-ify";
import { skinGardenArtists } from "../constants/skingarden-artists";
import { skingardenText } from "../constants/skingarden-text";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Image src="/SGLogo.png" alt="decorative arc" height="200" width="222" />
  );
};

const DonateButton: React.FC = () => (
  <SignUpButton
    buttonText="Donate"
    handleClick={() => {
      window.open("/donate");
    }}
  />
);

const Content: React.FC<{ className?: string; innerClassName?: string }> = ({
  className,
  innerClassName,
  children,
}) => {
  return (
    <div className={classnames(className, "flex justify-center px-6")}>
      <div className={classnames(innerClassName, "w-full max-w-4xl")}>
        {children}
      </div>
    </div>
  );
};

const ArtistGroup: React.FC<{ title?: string; className?: string }> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={className}>
      {title ? (
        <h3 className="font-bold text-black uppercase mb-8">{title}:</h3>
      ) : null}

      <div className="space-y-20">{children}</div>
    </div>
  );
};

const Section: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="pb-40">
      <h2 className="text-3xl sm:text-4xl pb-6 font-serif">{title}</h2>
      <div className="space-y-24">{children}</div>
      <div className="text-center pt-20">
        <DonateButton />
      </div>
    </div>
  );
};

const HeaderLink: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <a
      className={classnames(
        className,
        "text-4xl sm:text-6xl font-bold text-black block py-2 border-b border-dashed"
      )}
    >
      <Content>{children}</Content>
    </a>
  );
};
const Header: React.FC = () => {
  return (
    <div className="">
      <HeaderLink>RSVP</HeaderLink>
      <HeaderLink>Show Info</HeaderLink>
      <HeaderLink>Transcripts</HeaderLink>
      <HeaderLink>Donate</HeaderLink>
      <HeaderLink className="bg-yellow-300">Enter the garden</HeaderLink>
    </div>
  );
};

const SkinGarden = () => {
  return (
    <div className="text-black bg-gray-100">
      <Header />
      <Content className="pt-20">
        <Section title="Reconsider Flesh">
          <SpacedParagraphs text={skingardenText.reconsiderFlesh} />
          <ArtistGroup title="Space Sculpted By">
            <Artist artist={skinGardenArtists.salomeChatriot} />
          </ArtistGroup>
          <ArtistGroup title="Sound Woven By">
            <Artist artist={skinGardenArtists.bellaBaguena} />
          </ArtistGroup>
          <ArtistGroup title="Featuring Artwork From">
            <Artist artist={skinGardenArtists.bora} />
            <Artist artist={skinGardenArtists.victoriaCribb} />
            {/* TODO */}
            {/* <Artist artist={skinGardenArtists.hardmetacore} /> */}
            <Artist artist={skinGardenArtists.mengki} />
            <Artist artist={skinGardenArtists.vxn} />
            <Artist artist={skinGardenArtists.deboraSilva} />
            <Artist artist={skinGardenArtists.harrietDavey} />
            <Artist artist={skinGardenArtists.humanImmitation} />
            <Artist artist={skinGardenArtists.nadyaPlyamko} />
            <Artist artist={skinGardenArtists.teresaRofer} />
            <Artist artist={skinGardenArtists.elPopoSangre} />
            <Artist artist={skinGardenArtists.ryanVautier} />
            <Artist artist={skinGardenArtists.sarahBlomey} />
            <Artist artist={skinGardenArtists.oliaSvetlana} />
          </ArtistGroup>
        </Section>
        <Section title="Walkins Welcome">
          <SpacedParagraphs text={skingardenText.walkinsWelcome} />
          <ArtistGroup title="Space Sculpted By">
            <Artist artist={skinGardenArtists.ladyBambs} />
          </ArtistGroup>
          <ArtistGroup title="Sculptures By">
            <Artist artist={skinGardenArtists.nusiQuero} />
            <Artist artist={skinGardenArtists.alexShilt} />
          </ArtistGroup>
          <ArtistGroup title="Sound Woven By">
            <Artist artist={skinGardenArtists.sammieVeeler} />
            <Artist artist={skinGardenArtists.nusiQuero} />
          </ArtistGroup>
          <ArtistGroup title="Featuring Tattoos From">
            <Artist artist={skinGardenArtists.hydroMachine} />
            <Artist artist={skinGardenArtists.lvDian} />
            <Artist artist={skinGardenArtists.heavenlyBeautyTattoo} />
            <Artist artist={skinGardenArtists.pang} />
          </ArtistGroup>
        </Section>
        <Section title="Curators">
          <SpacedParagraphs text={skingardenText.curators} />
          <ArtistGroup>
            <Artist artist={skinGardenArtists.vivianQiu} />
            <Artist artist={skinGardenArtists.venusInFoil} />
            <Artist artist={skinGardenArtists.salomeChatriotCurator} />
          </ArtistGroup>
        </Section>
        <Section title="Acknowledgements">
          <SpacedParagraphs text={skingardenText.acknowledgements} />
        </Section>
      </Content>
    </div>
  );
};

export default SkinGarden;
