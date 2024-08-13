import { PaymentStrategy } from ".";
import OrderItem from "../services/order-item";

export default class DigitalProductPaymentStrategy implements PaymentStrategy {
  process(orderItem: OrderItem): void {
    console.log("Sending purchase description and generating discount voucher.");
    this.sendEmail(orderItem);
    this.generateDiscountVoucher(orderItem);
  }

  private sendEmail(orderItem: OrderItem): void {
    console.log(`Email sent to user with purchase description for ${orderItem.product.name}.`);
  }

  private generateDiscountVoucher(orderItem: OrderItem): void {
    console.log(`$10 discount voucher generated for ${orderItem.product.name}.`);
  }
}