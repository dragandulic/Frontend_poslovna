import { Individual } from "./individual";
import { LegalEntity } from "./legalentity";

export class Account{

    id: number
	accountnum: string;
	openingdate: string;
	isValid: boolean;
    currencyid: number;
	individualid: number;
	legalEntityid: number;
	bankid: number;


}