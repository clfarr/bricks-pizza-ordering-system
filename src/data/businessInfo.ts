export const BUSINESS_INFO = {
  name: 'Bricks Pizza & Pub',
  address: {
    street: '520 Main Street',
    city: 'Weaverville',
    state: 'CA',
    zip: '',
  },
  phone: '530-423-5281',
  hours: {
    'Monday': { open: '11:00 AM', close: '8:00 PM' },
    'Tuesday': { open: '11:00 AM', close: '8:00 PM' },
    'Wednesday': { open: '11:00 AM', close: '8:00 PM' },
    'Thursday': { open: '11:00 AM', close: '8:00 PM' },
    'Friday': { open: '11:00 AM', close: '9:00 PM' },
    'Saturday': { open: '11:00 AM', close: '9:00 PM' },
    'Sunday': { open: '11:00 AM', close: '9:00 PM' },
  },
};

export function getFormattedAddress(): string {
  return `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state}`;
}

export function getHoursForDay(day: string): string {
  const hours = BUSINESS_INFO.hours[day as keyof typeof BUSINESS_INFO.hours];
  return hours ? `${hours.open} - ${hours.close}` : 'Closed';
}
