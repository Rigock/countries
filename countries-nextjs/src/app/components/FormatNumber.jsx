export function FormatNumber (num) {
  return new Intl.NumberFormat('es-Es').format(num)
}