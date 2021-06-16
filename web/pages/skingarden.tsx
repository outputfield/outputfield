import classnames from "classnames";
import Image from "next/image";
import React, { FC, useState } from "react";
import "tailwindcss/tailwind.css";
import { SignUpButton } from "../components/sign-up-button/sign-up-button.component";
import { Artist } from "../components/skingarden/artist";
import { SpacedParagraphs } from "../components/skingarden/p-ify";
import { skinGardenArtists } from "../constants/skingarden-artists";
import { skingardenText } from "../constants/skingarden-text";

const Banner: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div className={classnames(className, "w-full p-y-8 bg-gray-300")}>
      <Content>{children}</Content>
    </div>
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
    <div className={classnames(className, "flex justify-center px-6 sm:px-10")}>
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

const Section: React.FC<{ title?: string }> = ({ title, children }) => {
  return (
    <div className="pb-48 last:pb-24">
      {title ? (
        <h2 className="text-3xl sm:text-4xl pb-6 font-serif">{title}</h2>
      ) : null}
      <div className="space-y-24">{children}</div>
      <div className="text-center pt-20">
        <DonateButton />
      </div>
    </div>
  );
};

const HeaderLink: React.FC<{
  className?: string;
  href?: string;
  target?: string;
  zIndexClassName?: string;
}> = ({ children, className, href, target, zIndexClassName }) => {
  return (
    <a
      href={href}
      target={target}
      className={classnames(
        className,
        zIndexClassName,
        "text-4xl sm:text-7xl font-bold text-black block py-1 sm:py-3 border-b border-dashed first:border-t"
      )}
    >
      <Content className={zIndexClassName} innerClassName={zIndexClassName}>
        {children}
      </Content>
    </a>
  );
};
const HeaderDate: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={classnames("uppercase font-bold text-lg", className)}>
      {children}
    </div>
  );
};
const Header: React.FC = () => {
  return (
    <div className="">
      <div
        className="
        w-full flex justify-center
        sm:absolute"
      >
        <div className="sm:w-full sm:max-w-xl sm:text-right sm:pt-20">
          <Image
            src="/skingarden/logorotate.gif"
            alt="Sking garden logo"
            height="200"
            width="222"
            className="z-10"
          />
        </div>
      </div>

      <Content>
        <div
          className="
          z-0
          flex space-x-8 justify-center pb-8 sm:pb-0
          sm:justify-start sm:absolute sm:pl-52 sm:pt-7"
        >
          <HeaderDate className="text-red-500 transform -rotate-3">
            Wed 6/16
          </HeaderDate>
          <HeaderDate className="transform rotate-12">Thur 6/17</HeaderDate>
          <HeaderDate className="transform -rotate-12">Fri 6/18</HeaderDate>
        </div>
      </Content>
      <div>
        <HeaderLink href="/rsvp" zIndexClassName="z-50">
          RSVP
        </HeaderLink>
        <HeaderLink zIndexClassName="z-50" href="https://www.notion.so/outputfield/Transcripts-1bc96764836b43ff9164e3cf779237bb" target="_blank">Transcripts</HeaderLink>
        <HeaderLink zIndexClassName="z-50" href="/donate" target="_blank">
          Donate
        </HeaderLink>
        <HeaderLink zIndexClassName="z-50" href="https://us02web.zoom.us/u/ketykq6snj" target="_blank">
          Livestream{" "}
          {/* <span className="text-3xl text-red-500">(9am-12pm PST today)</span> */}
        </HeaderLink>
        <HeaderLink href="https://newart.city/show/skingarden" target="_blank" zIndexClassName="z-50" className="bg-yellow-500">
          Enter the exhibition
        </HeaderLink>
      </div>
    </div>
  );
};

const PreviewSelector: React.FC<{
  title: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  imageSrc: string;
}> = ({ title, imageSrc, active, onClick, className }) => {
  return (
    <div
      className={classnames("cursor-pointer", className)}
      onClick={() => onClick?.()}
    >
      <div
        className={classnames(
          active && "",
          "h-[98px] w-[70px]",
          "sm:h-[168px] sm:w-[120px]",
          "lg:h-[280px] lg:w-[200px]",
          "cursor-pointer transition duration-200 p-0 relative"
        )}
        style={
          active
            ? { boxShadow: "0px 0px 10px 6px rgba(0,0,255,0.8)" }
            : undefined
        }
      >
        <Image
          src={imageSrc}
          alt="room preview"
          layout="fill"
          objectFit="cover"
          className="cursor-pointer"
        />
      </div>
      <div className="uppercase text-xs md:text-sm font-bold pt-4">{title}</div>
    </div>
  );
};

const previewContent = [
  `Output Field presents its debut exhibition: Skin Garden, a collection of artworks discussing bodies: through movement, space, sound, self, and fellow bodies. Skin Garden is body language. The three rooms inside this lobby present audiovisual reflections on our physical vessels, as they relate to trauma, language, queerness, tradition, and multiplicity.`,
  `Bodies Unhinge is an articulation of queer affect, through breath, movement, and voice. IOR50 and Betty Apple explore the ways unruly aesthetic experiences disrupt the borders of flesh and shake loose the psychic debris left by trauma. Here, the queer dynamics of raving offer the club as a site to sound out the affective afterlife of psychic injury.`,
  `Reconsider Flesh is a breathing sculpture garden nestled inside walls sculpted by Salomé Chatriot. Sourcing the multiplicity of flesh, this body of work carves out a space for just some of the bodies excluded when multitudes are reduced to a monolithic standard. These 3-dimensional musings are presented with Bella Baguena's distorted readings.`,
  `Walk-ins Welcome is a digital tattoo showroom. Advances in image-rendering have become interwoven into the process of tattooing, and archived onto skin. More and more, this analog art form has seen a shift towards the digital and the experimental. Walk-ins Welcome is a showcase of artists who have embraced this shift in their practice.`,
];

const Previews: React.FC<{ className?: string }> = ({ className }) => {
  const [activePreview, setActive] = useState(0);
  const content = previewContent[activePreview];

  return (
    <div className={classnames(className)}>
      <div className="flex justify-between">
        <PreviewSelector
          title="The Lobby"
          imageSrc="/skingarden/rooms/Skin_Garden__Lobby.png"
          active={activePreview === 0}
          onClick={() => setActive(0)}
          className="flex-1"
        />
        <PreviewSelector
          title="Bodies Unhinge"
          imageSrc="/skingarden/rooms/Skin_Garden__Bodies_Unhinge.png"
          active={activePreview === 1}
          onClick={() => setActive(1)}
          className="flex-1"
        />
        <PreviewSelector
          title="Reconsider Flesh"
          imageSrc="/skingarden/rooms/Skin_Garden__Reconsider_Flesh.png"
          active={activePreview === 2}
          onClick={() => setActive(2)}
          className="flex-1"
        />
        <PreviewSelector
          title="Walk-ins Welcome"
          imageSrc="/skingarden/rooms/Skin_Garden__WalkinsWelcome.png"
          active={activePreview === 3}
          onClick={() => setActive(3)}
          className="flex-1"
        />
      </div>
      <div className="pt-8 text-lg">{content}</div>
    </div>
  );
};

const Arrow: FC<{ className?: string; scale?: number }> = ({
  className,
  scale = 1,
}) => {
  return (
    <div
      className={classnames(
        className,
        "inline-block transform translate-y-[2px]"
      )}
    >
      <Image
        src="/skingarden/rooms/arrowLarge.svg"
        alt="arrow"
        height={15 * scale}
        width={40 * scale}
      />
    </div>
  );
};

const SkinGarden = () => {
  return (
    <div className="text-black bg-gray-100">
      <Header />
      <Banner>
        <div className="md:flex hidden font-bold text-sm lg:text-base uppercase flex-wrap justify-between py-4">
          <div>Output Field's debut exhibition</div>
          <Arrow />
          <div>3 openings, 3 events, 3 days</div>
          <Arrow />
          <div>4 rooms, 30 artists</div>
        </div>
        <div className="md:hidden uppercase font-bold py-4 flex justify-center">
          <div className="space-y-1">
            <div>Output Field's debut exhibition</div>
            <div>
              <Arrow /> 3 openings, 3 events, 3 days
            </div>
            <div>
              <Arrow /> 4 rooms, 30 artists
            </div>
          </div>
        </div>
      </Banner>

      <Content className="pt-20 pb-24">
        <Previews />
      </Content>
      <Banner className="mb-28 uppercase font-bold py-4">
        <div className="md:flex justify-between space-y-4 md:space-y-0">
          <div className="md:min-w-max">
            We're raising $5000 for these featured artists{" "}
            <a href="/donate" target="_blank" className="underline">
              here!
              <Arrow scale={1} className="-rotate-45" />
            </a>
          </div>
          <div className="md:min-w-max">Full show notes below</div>
        </div>
      </Banner>

      <Content>
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
            <Artist artist={skinGardenArtists.hardmetacore} />
            <Artist artist={skinGardenArtists.mengki} />
            <Artist artist={skinGardenArtists.vxn} />
            <Artist artist={skinGardenArtists.deboraSilva} />
            <Artist artist={skinGardenArtists.harrietDavey} />
            <Artist artist={skinGardenArtists.humanImitation} />
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
      <Banner className="text-lg font-bold uppercase py-4">
        <div className="space-y-2 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:flex-wrap">
          <div>Support our mission to redistribute clout.</div>
          <a href="/" target="_blank" className="underline block">
            outputfield.com
            <Arrow scale={1} className="-rotate-45" />
          </a>
          <a
            href="https://www.instagram.com/output.field/"
            target="_blank"
            className="underline block"
          >
            instagram
            <Arrow scale={1} className="-rotate-45" />
          </a>
        </div>
      </Banner>
    </div>
  );
};

export default SkinGarden;

// trigger build
