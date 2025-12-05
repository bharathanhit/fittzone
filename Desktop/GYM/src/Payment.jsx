import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const plans = {
  1: { title: "SILVER", amount: 1000 },
  2: { title: "PLATINUM", amount: 2000 },
  3: { title: "GOLD", amount: 2 },
};

const Payment = () => {
  const { planId } = useParams();
  const plan = plans[planId];
  const [upiLink, setUpiLink] = useState("");

  useEffect(() => {
    if (plan) {
      const link = `upi://pay?pa=abharathan61@okicici&pn=FitZone&am=${plan.amount}&cu=INR&tn=${plan.title}%20Plan`;
      setUpiLink(link);
    }
  }, [plan]);

  if (!plan) {
    return (
      <div className="text-center mt-10 text-red-500 font-bold">
        Invalid Plan Selected
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#140A2E] text-white px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Pay for {plan.title} Plan</h1>
      <p className="mb-4 text-lg">Amount: ₹{plan.amount}</p>

      <a
        href={upiLink}
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition mb-6"
      >
        Pay with GPay / PhonePe
      </a>

      <div className="bg-white p-4 rounded mb-4">
        <QRCode value={upiLink} size={180} />
      </div>

      <p className="text-sm text-gray-300 text-center">
        Scan this QR code using any UPI app to pay<br />
        <strong className="text-white">mygpay_account@okicici</strong>
      </p>

      <p className="text-sm text-yellow-400 text-center mt-4">
        If link doesn't work, manually scan to pay.
      </p>

      <p className="text-sm text-gray-400 mt-6 max-w-md text-center">
        After payment, please send a screenshot to WhatsApp:<br />
        <strong>+91-XXXXXXXXXX</strong>
      </p>
    </div>
  );
};

export default Payment;