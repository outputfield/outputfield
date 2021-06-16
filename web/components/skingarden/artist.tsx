import classnames from "classnames";
import Image from "next/image";
import { Pify } from "../../components/skingarden/p-ify";
import { SkinGardenArtist } from "../../constants/skingarden-artists";
import { Link } from "./link";

const Header: React.FC<{ className?: string; artist: SkinGardenArtist }> = ({
  className,
  artist,
}) => {
  return (
    <div className={classnames("flex w-full justify-between", className)}>
      <div className="">
        <div className="text-xl font-bold uppercase">{artist.name}</div>
        <div className="text-gray-800 text-sm uppercase">{artist.location}</div>
      </div>
      <div>
        {artist.website ? (
          <Link className="text-sm" href={artist.website}>
            website
          </Link>
        ) : null}
        {artist.instagram ? (
          <Link className="text-sm ml-2 sm:ml-4" href={artist.instagram}>
            instagram
          </Link>
        ) : null}
      </div>
    </div>
  );
};

const ArtImage: React.FC<{ className?: string; artist: SkinGardenArtist }> = ({
  className,
  artist,
}) => {
  return (
    <div className={classnames(className, "")}>
      {artist.image ? (
        <Image src={artist.image} height="192" width="192" />
      ) : (
        <div className={classnames("w-48 h-48 bg-green-100 shadow-md")}></div>
      )}
    </div>
  );
};

const Description: React.FC<{
  className?: string;
  artist: SkinGardenArtist;
}> = ({ className, artist }) => {
  return (
    <div className={classnames("text-base text-gray-800 space-y-4", className)}>
      <Pify text={artist.description} />
    </div>
  );
};

export const Artist: React.FC<{
  className?: string;
  artist: SkinGardenArtist;
}> = ({ className, artist }) => {
  return (
    <div
      className={classnames(
        className,
        "w-full grid gap-4 sm:grid-cols-artist sm:grid-rows-artist"
      )}
    >
      <ArtImage
        className="sm:row-span-2 sm:row-start-1 sm:col-start-1"
        artist={artist}
      />
      <Header className="sm:row-start-1 sm:col-start-2" artist={artist} />
      <Description className="sm:row-start-2 sm:col-start-2" artist={artist} />
    </div>
  );
};
