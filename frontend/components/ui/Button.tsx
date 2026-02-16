"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { buttonSizes, buttonVariants } from "@/lib/design-system";

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...rest
  } = props;

  const variantClass = buttonVariants[variant];
  const sizeClass = variant === "primarySm" ? "" : buttonSizes[size];
  const combinedClass = [variantClass, sizeClass].filter(Boolean).join(" ") + " " + className;

  if (props.as === "a" && "href" in props) {
    const { as, href, ...linkRest } = rest as ButtonAsLink;
    return (
      <a href={href} className={combinedClass.trim()} {...linkRest}>
        {children}
      </a>
    );
  }

  const { as, href, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button type="button" className={combinedClass.trim()} {...buttonRest}>
      {children}
    </button>
  );
}
