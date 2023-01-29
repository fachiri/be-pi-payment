import { Server } from 'http';
import PiNetwork from 'pi-backend';

const apiKey = "a19auxzuyk0qfp2jpgbwso1l5bpfmml7ustmsnokbryxoxj239fvz66fxuadtlez"
const walletPrivateSeed = "SC4ZMLAJN7AR5QEOEFFKKXAJTXZOPCZXCFB4YORJ75UQK2AHOBP5PZ2W" // starts with S
const pi = new PiNetwork(apiKey, walletPrivateSeed);

const userUid = "123456"
const paymentData = {
  amount: 1,
  memo: "Refund for apple pie",
  metadata: {productId: "apple-pie-1"},
  uid: userUid
}

// async function getPaymentId() {
//   const paymentId = await pi.createPayment(paymentData);
//   console.log("test");
//   console.log(paymentId);
// } 

// console.log(getPaymentId())

const server = Server