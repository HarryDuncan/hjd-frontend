import { useRouter } from "next/router";
import {
  BillingDetails,
  CustomerDetails,
  TransactionDetails,
} from "../checkout.types";
import { useEffect, useState } from "react";
import { snakeCaseKeysToCamelCase } from "utils/snakeCaseToCamelCase";

export const useTransactionData = () => {
  const router = useRouter();
  const [billingDetails, setBillingDetails] = useState<BillingDetails | null>(
    null
  );
  const [customerDetails, setCustomerDetails] =
    useState<CustomerDetails | null>(null);
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null);

  const [orderAlreadyCreated, setHasBeenCreated] = useState<boolean>(false);
  useEffect(() => {
    const sessionId = router.query.session_id as string;
    const getTransactionDetails = async () => {
      const response = await fetch(`/api/checkout_success`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      });
      if (response.ok) {
        const data = await response.json();

        const { shippingDetails, customerDetails, paymentIntent, created } =
          snakeCaseKeysToCamelCase(data.session);
        setBillingDetails(shippingDetails as unknown as BillingDetails);
        setCustomerDetails(customerDetails as unknown as CustomerDetails);
        setTransactionDetails({
          refId: paymentIntent as string,
          purchaseDate: created as number,
        });
        const alreadyCreated = compareTimes(created as number);
        setHasBeenCreated(alreadyCreated);
      }
    };

    if (sessionId && sessionId.length) {
      getTransactionDetails();
    }
  }, [router, setCustomerDetails, setBillingDetails]);
  return {
    customerDetails,
    transactionDetails,
    billingDetails,
    orderAlreadyCreated,
  };
};

const compareTimes = (createdTime: number) => {
  const now = new Date().getTime();

  // Calculate the difference in milliseconds
  const difference = now - createdTime;

  // Convert milliseconds to minutes
  const minutesDifference = difference / (1000 * 60);

  return minutesDifference >= 1;
};
