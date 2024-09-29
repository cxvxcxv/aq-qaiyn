import { LucideIcon } from 'lucide-react';
import { StaticImageData } from 'next/image';

export type TDescriptionInfo = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type TPricesInfo = {
  title: string;
  price: string;
  components: string[];
};

export type TActivitiesInfo = {
  img: StaticImageData;
  title: string;
  description: string;
};
