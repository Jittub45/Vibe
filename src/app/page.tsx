"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Page = async () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job invoked successfully!")
    }
  }));

  return (
    <div className = "p-4 max-w-7xl max-auto">
      <Button disabled = {invoke.isPending} onClick={() => invoke.mutate({ text: "Jitendra" })}>
        Invoke Background Job
      </Button>
    </div>
  );
}

export default Page;
