import { Bath, Clock, Utensils } from 'lucide-react';

import {
  TActivitiesInfo,
  TDescriptionInfo,
  TPricesInfo,
} from '@/types/info.types';

import antlerClinic2 from '@/assets/img/antlerClinic2.png';
import antlerClinic from '@/assets/img/antlerClinic.png';
import berries from '@/assets/img/berries.png';
import cabin from '@/assets/img/cabin.png';
import corral from '@/assets/img/corral.png';
import deers from '@/assets/img/deers.png';
import doubleRoom2 from '@/assets/img/doubleRoom2.png';
import doubleRoom3 from '@/assets/img/doubleRoom3.png';
import doubleRoom from '@/assets/img/doubleRoom.png';
import field from '@/assets/img/field.png';
import hallway from '@/assets/img/hallway.png';
import horses from '@/assets/img/horses.png';
import hotel from '@/assets/img/hotel.png';
import house from '@/assets/img/house.png';
import lake from '@/assets/img/lake.png';
import lakeMountains from '@/assets/img/lakeMountains.png';
import livingRoom2 from '@/assets/img/livingRoom2.png';
import livingRoom from '@/assets/img/livingRoom.png';
import river from '@/assets/img/river.png';
import sign from '@/assets/img/sign.png';
import singleRoom from '@/assets/img/singleRoom.png';
import sofa from '@/assets/img/sofa.png';
import stone from '@/assets/img/stone.png';
import yurt from '@/assets/img/yurt.png';

export const TELS = ['+77055223333', '+77052636337', '+77075449796'];

export const HEADER_IMAGES = [
  field,
  lake,
  river,
  lakeMountains,
  stone,
  corral,
  sign,
];

export const SLIDER_IMAGES = [
  singleRoom,
  livingRoom,
  doubleRoom,
  doubleRoom2,
  doubleRoom3,
  sofa,
  hallway,
  livingRoom,
  livingRoom2,
  cabin,
  antlerClinic,
  antlerClinic2,
  yurt,
  house,
  hotel,
];

export const DESCRIPTION_INFO: TDescriptionInfo[] = [
  {
    icon: Clock,
    title: 'Длительность',
    text: '5-7 дней',
  },
  {
    icon: Bath,
    title: 'Процедуры',
    text: '2 раза в день',
  },
  {
    icon: Utensils,
    title: 'Питание',
    text: '3 раза в день',
  },
];

export const PRICES_INFO: TPricesInfo[] = [
  {
    title: 'стандартный номер на человека',
    price: '35 000 тг',
    components: [
      '3-х разовое питание',
      'пантофитовые ванны',
      'посещение фитобани',
      'прием пантогематогена',
    ],
  },
  {
    title: 'отдельный домик на 4 человека',
    price: '150 000 тг',
    components: [
      '3-х разовое питание',
      'пантофитовые ванны',
      'посещение фитобани',
      'прием пантогематогена',
    ],
  },
];

export const ACTIVITIES_INFO: TActivitiesInfo[] = [
  {
    img: horses,
    title: 'Конные походы',
    description:
      'Мы организуем конные прогулки, поездки на автомобиле к интересным природным объектам Катон-Карагайского национального природного парка, а так же туры к удивительной горе Белуха (4506 м)',
  },
  {
    img: berries,
    title: 'Сбор грибов, ягод, трав',
    description:
      'Сбор ягод, грибов, лекарственных растений является увлекательным видом отдыха, который имеет релаксирующее воздействие. Не упустите возможность заготовить себе ягоды и травы на зиму.',
  },
  {
    img: deers,
    title: 'Пантолечение',
    description:
      'В биохимический состав пантов марала входят многочисленные аминокислоты (общие и свободные), коллаген, витамины, микро- и макроэлементы, оказывающие положительное влияние на работу всего организма',
  },
];
