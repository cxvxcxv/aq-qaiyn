export function formatTel(tel: string) {
  const regex = /^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/;
  return tel.replace(regex, '$1 $2 $3 $4 $5');
}
