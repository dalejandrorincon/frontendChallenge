import { Price } from "types";

export const formatPrice = (price: Price): string => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(price.amount);
};
