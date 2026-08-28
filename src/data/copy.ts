export const ADDRESS_LINE = "1933 S. Broadway, Los Angeles CA 90007";
export const ADDRESS_STREET = "1933 S. Broadway";
export const ADDRESS_CITY = "Los Angeles, CA 90007";
export const EMAIL = "info@myshipfront.com";
export const H1_LINE_1 = "You Sell. We Ship.";
export const H1_LINE_2 = "eCommerce at Scale";

export const CAPABILITIES = [
  "Inbound",
  "Kitting",
  "Storage",
  "FBA Prep",
  "Outbound",
  "Last-Mile Delivery",
  "Same-Day Delivery",
] as const;

export const NETWORK_STEPS = [
  {
    id: "STORE",
    label: "STORE",
    body: "Integrate sales channels",
  },
  {
    id: "INVENTORY",
    label: "INVENTORY",
    body: "Shipfront receives and inventories.",
  },
  {
    id: "FULFILLMENT",
    label: "FULFILLMENT",
    body: "We build custom workflows to pick, pack, label, and ship your products exactly how you would like.",
  },
  {
    id: "QUALITY CHECK",
    label: "QUALITY CHECK",
    body: "We get your products to your customers, quickly and accurately.",
  },
  {
    id: "CARRIER",
    label: "CARRIER",
    body: "Working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery.",
  },
  {
    id: "CUSTOMER",
    label: "CUSTOMER",
    body: "Happy Customers!",
  },
] as const;

export const PROCESS_STEPS = [
  "Find a cool product",
  "Get it manufactured",
  "Ship inventory from supplier to Shipfront",
  "Shipfront receives and inventories",
  "Integrate sales channels",
  "We ship",
  "Happy Customers!",
] as const;
