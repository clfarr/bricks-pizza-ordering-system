export interface PizzaSize {
  size: 'personal' | 'small' | 'medium' | 'large';
  inches: string;
  specialtyPrice: number;
  buildYourOwnPrice: number;
  cauliflowerCrustPrice?: number;
}

export const PIZZA_SIZES: PizzaSize[] = [
  {
    size: 'personal',
    inches: '10"',
    specialtyPrice: 17.99,
    buildYourOwnPrice: 10.99,
  },
  {
    size: 'small',
    inches: '12"',
    specialtyPrice: 24.99,
    buildYourOwnPrice: 13.99,
    cauliflowerCrustPrice: 4.00, // Additional cost for cauliflower crust
  },
  {
    size: 'medium',
    inches: '16"',
    specialtyPrice: 28.99,
    buildYourOwnPrice: 16.99,
  },
  {
    size: 'large',
    inches: '18"',
    specialtyPrice: 32.99,
    buildYourOwnPrice: 20.99,
  },
];

export const TOPPING_PRICE = 2.99;
export const PROTEIN_PRICE = 2.99;

// Helper function to get pizza price
export function getPizzaPrice(
  size: 'personal' | 'small' | 'medium' | 'large',
  isSpecialty: boolean,
  isCauliflowerCrust: boolean = false,
  toppingCount: number = 0,
  proteinCount: number = 0
): number {
  const sizeData = PIZZA_SIZES.find(s => s.size === size);
  if (!sizeData) return 0;

  let basePrice = isSpecialty ? sizeData.specialtyPrice : sizeData.buildYourOwnPrice;

  // Add cauliflower crust upcharge if applicable
  if (isCauliflowerCrust && sizeData.cauliflowerCrustPrice) {
    basePrice += sizeData.cauliflowerCrustPrice;
  }

  // Add topping and protein costs (only for build your own)
  if (!isSpecialty) {
    basePrice += (toppingCount * TOPPING_PRICE) + (proteinCount * PROTEIN_PRICE);
  }

  return Number(basePrice.toFixed(2));
}
