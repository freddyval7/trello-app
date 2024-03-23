"use client";

import { stripeRedirect } from "@/actions/stripe-redirect";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "sonner";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export function SubscriptionButton({ isPro }: SubscriptionButtonProps) {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    if (isPro) {
      execute({});
    } else {
      proModal.onOpen();
    }
  };

  return (
    <div className="w-full mt-8 flex items-center">
      <Button onClick={onClick} variant={"primary"} disabled={isLoading}>
        {isPro ? "Manage subscription" : "Upgrade to Pro"}
      </Button>
    </div>
  );
}
