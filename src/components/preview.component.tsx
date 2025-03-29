"use client";
import { ReactElement } from "react";
import { Label } from "@/shad-components/ui/label";
import { Input } from "@/shad-components/ui/input";

type Props = {
  previousSteps: { [key: string]: string | FileList | undefined };
};
const Preview = (props: Props): ReactElement => {
  const elements = (): ReactElement[] => {
    const returnArray: ReactElement[] = [];

    for (const key in props.previousSteps) {
      const value =
        typeof props.previousSteps[key] === "object"
          ? (props.previousSteps[key] as FileList)[0].name
          : props.previousSteps[key];
      returnArray.push(
        <div key={Math.random() * 1000} className="my-3">
          <Label className="mb-1">{key}</Label>
          <Input readOnly defaultValue={value}></Input>
        </div>
      );
    }

    return returnArray;
  };

  return <div className="inline-block w-[100%] h-[100%]">{elements()}</div>;
};

export default Preview;
