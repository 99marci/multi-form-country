"use client";
import { ReactElement } from "react";
import { Label } from "@/shad-components/ui/label";
import { Input } from "@/shad-components/ui/input";
import { useWatch } from "react-hook-form";

type Props = {
  control: any;
};

const Preview = (props: Props): ReactElement => {
  const formValues = useWatch({ control: props.control });
  const elements = (): ReactElement[] => {
    const returnArray: ReactElement[] = [];

    for (const key in formValues) {
      const value =
        typeof formValues[key] === "object"
          ? (formValues[key] as FileList)[0].name
          : formValues[key];

      const displayValue =
        value instanceof FileList ? value[0]?.name || "" : String(value || "");
      returnArray.push(
        <div key={Math.random() * 1000} className="my-3">
          <Label className="mb-1">{key}</Label>
          <Input readOnly defaultValue={displayValue}></Input>
        </div>
      );
    }

    return returnArray;
  };

  return <div className="inline-block w-[100%] h-[100%]">{elements()}</div>;
};

export default Preview;
