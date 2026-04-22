"use client";

import * as React from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof Button>;

export function SignInCtaButton({ children, ...props }: ButtonProps) {
  return (
    <SignInButton>
      <Button {...props}>{children}</Button>
    </SignInButton>
  );
}

export function SignUpCtaButton({ children, ...props }: ButtonProps) {
  return (
    <SignUpButton>
      <Button {...props}>{children}</Button>
    </SignUpButton>
  );
}
