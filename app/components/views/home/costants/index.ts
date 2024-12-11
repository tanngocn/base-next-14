import Banner1 from '@/assets/svg/banner-1.svg';
import Banner2 from '@/assets/svg/banner-2.svg';
import Banner3 from '@/assets/svg/banner-3.svg';

import White1 from '@/assets/images/white-product/1.jpg';
import White2 from '@/assets/images/white-product/2.jpg';
import White3 from '@/assets/images/white-product/3.jpg';
import White4 from '@/assets/images/white-product/4.jpg';
import White5 from '@/assets/images/white-product/5.jpg';

import Pink1 from '@/assets/images/pink-product/1.jpg';
import Pink2 from '@/assets/images/pink-product/2.jpg';
import Pink3 from '@/assets/images/pink-product/3.jpg';
import Pink4 from '@/assets/images/pink-product/4.jpg';
import Pink5 from '@/assets/images/pink-product/5.jpg';
export const features = [
  {
    icon: Banner1,
    label: 'Clunky Ironing Boards',
  },
  {
    icon: Banner2,
    label: 'Leaky Steamers',
  },
  {
    icon: Banner3,
    label: 'Expensive Dry Cleaning',
  },
];
export const feature2 = [
  {
    icon: Banner1,
    label: 'No More Boards',
  },
  {
    icon: Banner2,
    label: 'No More Leakage',
  },
  {
    icon: Banner3,
    label: 'No More Dry-Cleaning',
  },
];

export const COLORS = {
  WHITE: 'white',
  PINK: 'pink',
};

export const imagesAboutProduct = {
  [COLORS.WHITE]: [White1, White2, White3, White4, White5],
  [COLORS.PINK]: [Pink1, Pink2, Pink3, Pink4, Pink5],
};

export const accordionProducts = [
  {
    key: 'details',
    title: 'Detials',
    items: [
      'Non-stick aluminum plates built for durability',
      'Lightweight form-factor (1.4 lbs, 14 in Length)',
      '8 ft power cord for easy maneuvering',
      'Built-in tilt sensors to ensure automatic shut off after 10 minutes of no movement',
      'Six Fabric-Specific Heat Settings',
      'UL Certified and Patent-Pending',
      'Water Tank: 29ml',
      'Voltage/Frequency/Power: 120V/60Hz/450W',
    ],
  },
  {
    key: 'care',
    title: 'Care',
    items: [
      'Use our signature fabric facial or distilled water when filling the steam port.',
      'Remove the dirt from the plates with a damp cloth, sponge or Q-tip after iron is unplugged and cool.',
      'Turn the iron back on and lightly steam over an old cloth. This will help remove any residue left in the steam holes.',
      'When finished cleaning, turn iron off and allow time to cool before storing.',
    ],
  },
];

export const ironOut = [
  {
    title: 'Can it reach the middle of the garment?',
    content: 'The device is 14 inches in length and designed to reach across most garments.',
  },
  {
    title: 'How is it different from a hair straightener?',
    content:
      'The Nori Press has six fabric specific heat settings so you never have to worry about burning your clothes. In addition, it has elongated arms to reach across your garment and a steam steting that will allow it to work as a standalone steamer.',
  },
  {
    title: 'Which fabrics can I use my Nori Press on?',
    content: `
    The device has six fabric specific heat settings: linen, denim, cotton, wool, silk, and polyester. For more sensitive fabrics such
as silk, we recommend starting with just steam. For exact instructions on how to press and/or steam, visit our How to Use Page.
    `,
  },
];
