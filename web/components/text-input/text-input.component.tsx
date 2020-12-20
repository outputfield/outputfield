import * as React from "react";
import { forwardRef } from "react";

interface Props {
  label: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const TextInput: React.FC<Props> = forwardRef((props, ref) => {
  return (
    <div>
      TextInput props: {JSON.stringify(props, null, 2)}
      <br />
      <input ref={ref as any} />
    </div>
  );
});
