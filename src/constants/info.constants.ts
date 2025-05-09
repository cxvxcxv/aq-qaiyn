import { Bath, Clock, Utensils } from 'lucide-react';

import { TDescriptionInfo, TPricesInfo } from '@/types/info.types';

import antlerClinic from '@/assets/img/antlerClinic.png';
import bath from '@/assets/img/bath.png';
import bathhouse2 from '@/assets/img/bathhouse2.png';
import bathhouse from '@/assets/img/bathhouse.png';
import cabins from '@/assets/img/cabins.png';
import corral from '@/assets/img/corral.png';
import deers from '@/assets/img/deers.png';
import doubleRoom2 from '@/assets/img/doubleRoom2.png';
import doubleRoom from '@/assets/img/doubleRoom.png';
import field from '@/assets/img/field.png';
import hallway from '@/assets/img/hallway.png';
import house2 from '@/assets/img/house2.png';
import house from '@/assets/img/house.png';
import kitchen from '@/assets/img/kitchen.png';
import lake from '@/assets/img/lake.png';
import lakeMountains from '@/assets/img/lakeMountains.png';
import livingRoom2 from '@/assets/img/livingRoom2.png';
import livingRoom from '@/assets/img/livingRoom.png';
import outside2 from '@/assets/img/outside2.png';
import outside from '@/assets/img/outside.png';
import river from '@/assets/img/river.png';
import room1 from '@/assets/img/room1.png';
import room2 from '@/assets/img/room2.png';
import room3 from '@/assets/img/room3.png';
import room4 from '@/assets/img/room4.png';
import room5 from '@/assets/img/room5.png';
import room6 from '@/assets/img/room6.png';
import room7 from '@/assets/img/room7.png';
import room8 from '@/assets/img/room8.png';
import room9 from '@/assets/img/room9.png';
import room10 from '@/assets/img/room10.png';
import room11 from '@/assets/img/room11.png';
import room12 from '@/assets/img/room12.png';
import sign from '@/assets/img/sign.png';
import stone from '@/assets/img/stone.png';

export const TELS = ['+77052636337', '+77055223333', '+77075449796'];

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
  outside,
  outside2,
  antlerClinic,
  house,
  house2,
  hallway,
  kitchen,
  cabins,
  bath,
  bathhouse,
  bathhouse2,
  deers,
  livingRoom,
  livingRoom2,
  doubleRoom,
  doubleRoom2,
  room1,
  room2,
  room3,
  room4,
  room5,
  room6,
  room7,
  room8,
  room9,
  room10,
  room11,
  room12,
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
      'проживание',
      '3-х разовое питание',
      'посещение фитобани',
      'пантофитовые ванны  (2 раза)',
      'прием пантогематогена (3 раза)',
    ],
  },
];
