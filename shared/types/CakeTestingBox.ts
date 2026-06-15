type CakeTastingInquiry = {
  id: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: "email" | "text";

  interestType: "custom-cake" | "sweet-tooth" | "gift";

  deliveryMethod: "pickup" | "shipping";

  requestedDate: string;

  boxType: "classic" | "luxe" | "custom";

  flavors?: string[];

  notes?: string;

  createdAt: string;
};
