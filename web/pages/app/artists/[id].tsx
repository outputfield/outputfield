import { NextPage } from "next";
import "tailwindcss/tailwind.css";

// Code in this component!
const Contact: React.FC = () => {
  return (
    <div className="text-2xl font-bold text-red-700">
      Hello world (code here)
    </div>
  );
};

const ExampleLink: React.FC<{ href: string; target?: string }> = ({
  href,
  target,
  children,
}) => {
  return (
    <a className="text-blue underline font-bold" href={href} target={target}>
      {children}
    </a>
  );
};

const ExamplePara: React.FC = ({ children }) => (
  <p className="text-lg pb-6 leading-snug">{children}</p>
);

const Code: React.FC = ({ children }) => (
  <code className="bg-gray-300">{children}</code>
);

const Artist: NextPage = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="max-w-lg w-full pt-12">
        <h1 className="text-3xl font-bold pb-2">Artist Contact</h1>
        <ExamplePara>
          To get started, fork or clone the{" "}
          <ExampleLink href="https://github.com/outputfield/outputfield-app">
            outputfield-app
          </ExampleLink>{" "}
          repo. Open it up in VS Code or your preferred IDE to find this very
          file at the path <Code>/web/pages/app/artists/[id].tsx</Code>.
        </ExamplePara>
        <ExamplePara>
          This is a stub component where you can develop the artist contact
          component. Feel free to change this file however you like. There is no
          data or API set up here, so try making up example data where needed.
        </ExamplePara>
        <ExamplePara>
          To develop, navigate to the web directory (<Code>cd web</Code>),
          install the packages with <Code>npm install</Code> (you only have to
          do this once and then every time <Code>package.json</Code> is
          updated), and then run <Code>npm run dev</Code> to start the server.
          Once the server is running, open up{" "}
          <ExampleLink href="http://localhost:3000/app/artists/123">
            http://localhost:3000/app/artists/123
          </ExampleLink>{" "}
          in your browser to see this component.
        </ExamplePara>
        <ExamplePara>
          To make working with Tailwind easier, I personally use VS Code with
          the official{" "}
          <ExampleLink
            href="https://tailwindcss.com/docs/editor-support#intelli-sense-for-vs-code"
            target="_blank"
          >
            Tailwind Intellisense
          </ExampleLink>{" "}
          extension. Feel free to develop with whatever tools you like.
        </ExamplePara>
        <h2 className="text-xl font-bold">Helpful links</h2>
        <ul className="list-disc pl-5 pb-12 text-lg">
          <li>
            <ExampleLink href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS docs
            </ExampleLink>
          </li>
          <li>
            <ExampleLink href="https://nextjs.org/" target="_blank">
              NextJS docs
            </ExampleLink>
          </li>
          <li>
            <ExampleLink
              href="https://www.figma.com/file/L1u5J1AzuhXV3TyPNhXLzx/Output-Site-Design-System?node-id=120%3A0"
              target="_blank"
            >
              Design in Figma
            </ExampleLink>
          </li>
        </ul>
        <Contact />
      </div>
    </div>
  );
};

export default Artist;
