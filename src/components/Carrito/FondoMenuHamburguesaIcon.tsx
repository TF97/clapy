import { memo, SVGProps } from 'react';

const FondoMenuHamburguesaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 55 53' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={27.5} cy={26.5} rx={27.5} ry={26.5} fill='#BEE9E8' />
  </svg>
);

const Memo = memo(FondoMenuHamburguesaIcon);
export { Memo as FondoMenuHamburguesaIcon };
