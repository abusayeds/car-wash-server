import { slotModel } from "../slots/slots-model";
import { verifyPayment } from "./payment.utils";

const confirmationService = async (
  slotId: string,
  transactionId: string,
  
) => {
  const verifyPaymentMethod = await verifyPayment(transactionId);
  let result;
  if (verifyPaymentMethod && verifyPaymentMethod.pay_status === "Successful") {
    const data = {
      isBooked: "booked",
    };
    result = await slotModel.findOneAndUpdate({ _id: slotId }, data, {
      new: true,
    });
  }

  return result;
};
export const paymentSerice = {
  confirmationService,
};
