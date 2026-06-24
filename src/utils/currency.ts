export function formatToBRL(value: string): string {
  const numericValue = value.replace(/\D/g, "");
  const number = parseFloat(numericValue) / 100;

  if (isNaN(number)) return "";

   return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits:2,
    maximumFractionDigits:2,
  }).format(number);
}
