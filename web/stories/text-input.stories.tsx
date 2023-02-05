import React, { useEffect, useRef } from "react";
import { TextInput } from "../components/text-input/text-input.component";

export default {
  title: "ui-kit/text-input",
};

const containerStyle = { marginBottom: 50 };

const UseRefExample: React.FC = () => {
  const inputRef = useRef();

  useEffect(() => {
    ((inputRef.current as any) as HTMLInputElement).value =
      "overwriten with ref";
  }, [inputRef]);

  return (
    <TextInput
      ref={inputRef}
      label={"useRef example"}
      defaultValue={"This value will be overwritten"}
    />
  );
};

export const TypeRamp = () => {
  return (
    <div>
      <div style={containerStyle}>
        <TextInput label={"Sign up for launch updates"} />
      </div>
      <div style={containerStyle}>
        <TextInput
          label={"This one is disabled"}
          disabled={true}
          defaultValue={"nope"}
        />
      </div>
      <div style={containerStyle}>
        <TextInput
          label={"This one is invalid"}
          invalid={true}
          errorMessage={"The error message"}
        />
      </div>
      <div style={containerStyle}>
        <UseRefExample />
      </div>
    </div>
  );
};
