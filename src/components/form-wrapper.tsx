import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function FormWrapper({ children }: Props) {
  return <div className="flex align-center m-12 flex-col">{children}</div>;
}
