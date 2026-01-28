import { useEffect, useRef } from "react";
import type {
  PaymentModalProps,
  PaymentStatusType,
  RazorpayOptions,
  RazorpayResponse,
} from "../../Types";
import { PAYMENT_STATUS } from "../../Constants";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
      on: (
        event: string,
        callback: (response: RazorpayResponse) => void,
      ) => void;
    };
  }
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isLoading,
  btnText,
  amount = 0,
  userData = {},
  onPaymentComplete,
}) => {
  const hasHandledPayment = useRef<string | null>(null);

  //   const { data: settingData } = useGetApiQuery({ url: URL_KEYS.SETTINGS.ALL });
  let settingData = "";
  const RazorPayKey = settingData;

  const { name, email, contact } = userData || {};

  useEffect(() => {

    if (document.getElementById("razorpay-script")) return;
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const startPayment = async () => {
    if (amount <= 0) {
      return onPaymentComplete(
        PAYMENT_STATUS.COMPLETED,
        { razorpay_payment_id: "" },
        "",
      );
    }

    if (!window.Razorpay) {
      console.error("Razorpay not loaded!");
      return;
    }

    const safeComplete = (status: PaymentStatusType, response: any) => {
      const currentPaymentId =
        response?.razorpay_payment_id || "FAILED_ATTEMPT";

      if (hasHandledPayment.current === currentPaymentId) return;
      hasHandledPayment.current = currentPaymentId;
      onPaymentComplete(status, response, RazorPayKey);
    };

    const options: RazorpayOptions = {
      key: RazorPayKey,
      amount: amount * 100,
      currency: "INR",
      name: "BHARAT EXAM FEST",
      handler: (res) => safeComplete(PAYMENT_STATUS.COMPLETED, res),
      prefill: {
        name,
        email,
        contact,
      },
      theme: { color: "#eb8844" },
    };

    const rzp = new window.Razorpay(options);

    const handleFail = (res: any) => {
      const failedResponse = {
        razorpay_payment_id: res?.error?.metadata?.payment_id || "",
        error: res?.error,
      };
      safeComplete(PAYMENT_STATUS.FAILED, failedResponse);
    };

    rzp.on("payment.failed", handleFail);

    rzp.open();
  };
  return (
    <button
      onClick={startPayment}
      disabled={!RazorPayKey || isLoading}
      //   loading={isLoading}
      className="btn primary_btn w-full !h-12 font-semibold mt-4"
    >
      {btnText}
    </button>
  );
};

export default PaymentModal;
