import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Carrito.module.css';
import { FondoMenuHamburguesaIcon } from './FondoMenuHamburguesaIcon';

interface Props {
  className?: string;
}
/* @figmaId 7:32 */
export const Carrito: FC<Props> = memo(function Carrito(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.header}></div>
      <div className={classes.carrito}>Carrito</div>
      <div className={classes.fondoMenuHamburguesa}>
        <FondoMenuHamburguesaIcon className={classes.icon} />
      </div>
      <div className={classes.button}></div>
      <div className={classes.contactanos}>contactanos</div>
      <div className={classes.google_mail_gmail_logo_icon_15}></div>
      <div className={classes.facebook_iconIconsCom_536121}></div>
      <div className={classes.instagram_iconIconsCom_668041}></div>
      <div className={classes.whatsapp_372291}></div>
      <div className={classes.menuHamburguesa}></div>
      <div className={classes.left_return_arrow_icon_1933351}></div>
      <div className={classes.lista}></div>
      <div className={classes.line5}></div>
      <div className={classes.line4}></div>
      <div className={classes.producto1}>Producto 1</div>
      <div className={classes.producto2}>Producto 2</div>
      <div className={classes.producto3}>Producto 3</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.total}>Total</div>
    </div>
  );
});
