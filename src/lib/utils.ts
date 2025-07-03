export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '').replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
}