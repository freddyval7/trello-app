"use client";

import { createBoard } from "@/actions/create-board";
import { FormSubmit } from "@/components/form/form-button";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

export default function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: () => {
      console.log("Board created");
    },
    onError: (error) => {
      console.error("Board creation failed", error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} id="title" label="Title" required />
      </div>
      <FormSubmit>Create Board</FormSubmit>
    </form>
  );
}
