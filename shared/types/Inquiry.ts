import { OccasionType } from "./event";

export interface Inquiry {
  id: string;

  // Audit
  createdAt: string;
  updatedAt?: string;

  // Workflow
  status: InquiryStatus;

  // Customer
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  // Order Details
  methodOfDelivery: DeliveryMethod;

  requestedDate: string;
  requestedTime: string;
  timezone: string;

  shippingAddress?: Address;

  // Event
  event: string;
  eventTheme: string;

  // Product Details
  itemsNeeded: string;
  servingsRequired: number;

  cookieCakeFlavor?: string;

  cakeFlavor?: string;
  cakeFilling?: string;
  icing?: string;

  // Marketing
  referralSource: string;
  referrerName?: string;

  // Notes
  description?: string;

  // Uploads
  imageKeys: string[];

  // Agreements
  quoteAcknowledged: boolean;
  rushFeeAcknowledged: boolean;

  occasionTypes?: OccasionType[];
}

export interface Address {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
}

export type InquiryStatus =
  | "new"
  | "contacted"
  | "quoted"
  | "approved"
  | "declined"
  | "completed"
  | "cancelled";

export type DeliveryMethod = "pickup" | "delivery" | "shipping";
