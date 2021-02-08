import classNames from "classnames/bind";
import * as React from "react";
import { forwardRef } from "react";
import styles from "./text-input.module.scss";

interface Props {
  label: string;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  defaultValue?: string;
  ref?: any;
  width?: string | number;
  onChange?: (event: any) => any;
  onFocus?: (event: any) => any;
  onBlur?: (event: any) => any;
  state?: string;
  textInput?: React.Ref<HTMLInputElement>;

  ariaLabel?: string;
  ariaRequired?: boolean;
}

const cx = classNames.bind(styles);

export const TextInput: React.FC<Props> = forwardRef(
  (
    {
      label,
      invalid,
      disabled,
      defaultValue,
      errorMessage,
      width,
      onChange,
      onFocus,
      onBlur,
      state,
      ariaLabel,
      ariaRequired,
    },
    ref
  ) => {
    const inputClasses = cx({
      input: true,
      focus: state == "typing" || state == "loading",
      invalid,
      disabled,
    });
    const labelClasses = cx({
      label: true,
      success: state === "success",
      invalid,
      disabled,
    });

    const textInput = React.useRef<HTMLInputElement>(null);
    if(state === "success" && textInput != null && textInput.current != null){
      textInput.current.value = "";
    }

    return (
      <div className={styles.root} style={{ width }}>
        <div className={styles.errorMessage}>{errorMessage}</div>
        <input
          className={inputClasses}
          ref={textInput}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-label={ariaLabel}
          aria-required={ariaRequired}
        />
        <div className={labelClasses}>{label}</div>
      </div>
    );
  }
);
