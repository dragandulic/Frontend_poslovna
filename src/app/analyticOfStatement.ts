import { Currency } from "./currency";
import { Account } from "./account";

export class AnalyticOfStatement{

    debtorOrderer: string;
    purposeOfPayment: string;
    creditorReceiver: string;
    code: string;
    paymentCurrency: Currency;
    amount: number;
    debtorAccount: Account;
    modelOfIndebtedness: number;
    referenceNumberOfIndebtedness: string;

}