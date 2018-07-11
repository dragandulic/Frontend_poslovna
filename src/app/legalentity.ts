import { Bank } from "./Bank";
import { Activity } from "./activity";

export class LegalEntity{

    id: number;
	name: string;
	shortName: string;
	location: string;
	address: string;
	phonenumber: string;
	fax: string;
	email: string;
	responsiblePerson: string;
	activity: Activity;
	mbr: string;
	jmbg: string;
	taxAuthority: string;
	taxNumber: string;
	deliveryAddress: string;
	bank: Bank;
    bankId: number;
	bankid: number;


}