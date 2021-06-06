import classnames from "classnames";
import { Link } from "./link";

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classnames('flex w-full justify-between', className)}>
      <div className="">
        <div className="text-xl">BORA</div>
        <div className="text-gray-800 text-sm">Kalkutta, India</div>
      </div>
      <div>
        <Link className="text-sm">website</Link>
        <Link className="text-sm ml-2">instagram</Link>
      </div>
    </div>
  );
};

const ArtImage: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={classnames(className, "")}><div className={classnames('w-48 h-48 bg-green-100 shadow-md')}></div></div>
};

const Description: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classnames('text-base text-gray-800', className)}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec malesuada sem. Cras venenatis vitae nisi quis egestas. In hac habitasse platea dictumst. Etiam tincidunt libero quis est consequat, vitae tempus neque imperdiet. Vestibulum at erat vel odio sollicitudin tincidunt sed non dolor. Duis dictum hendrerit felis, sit amet sollicitudin felis condimentum non. In consequat risus in mi venenatis, eu blandit odio aliquam. Donec varius velit orci, non varius nisi laoreet in. Nulla facilisi.
    </div>
  );
};

export const Artist: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classnames(className, "w-full p-2 grid gap-4")}>
      <ArtImage className="sm:row-span-2 sm:row-start-1 sm:col-start-1" />
      <Header className="sm:row-start-1 sm:col-start-2" />
      <Description className="sm:row-start-2 sm:col-start-2" />
    </div>
  );
};


// export const Artist: React.FC = () => {
//   return (
//     <div className="bg-gray-50 w-full flex p-2 space-x-2">
//       <ArtImage />
//       <div className="flex-1 space-y-4">
//         <Header />
//         <Description />
//       </div>
//     </div>
//   );
// };
