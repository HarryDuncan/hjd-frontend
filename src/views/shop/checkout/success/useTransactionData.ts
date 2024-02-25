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
        // console.log(data);
        const { shippingDetails, customerDetails, paymentIntent, created } =
          snakeCaseKeysToCamelCase(data.session);
        setBillingDetails(shippingDetails as unknown as BillingDetails);
        setCustomerDetails(customerDetails as unknown as CustomerDetails);
        setTransactionDetails({
          refId: paymentIntent as string,
          purchaseDate: created as number,
        });
      }
    };

    if (sessionId && sessionId.length) {
      getTransactionDetails();
    }
  }, [router, setCustomerDetails, setBillingDetails]);
  return { customerDetails, transactionDetails, billingDetails };
};
