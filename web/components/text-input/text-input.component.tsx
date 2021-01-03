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
      ariaLabel,
      ariaRequired,
    },
    ref
  ) => {
    const inputClasses = cx({
      input: true,
      invalid,
      disabled,
    });
    const labelClasses = cx({
      label: true,
      invalid,
      disabled,
    });
    return (
      <div style={{ width }}>
        <div className={styles.errorMessage}>{errorMessage}</div>
        <input
          className={inputClasses}
          ref={ref as any}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          aria-label={ariaLabel}
          aria-required={ariaRequired}
        />
        <div className={labelClasses}>{label}</div>
      </div>
    );
  }
);
