import Link from 'next/link';

import styles from '../styles/components/header.module.scss';
import { useState } from 'react';
import MarketLink from './MarketLink';

export default function Header() {
  const leftMenu = [
    { title: 'Мужское', url: '/catalog/male' },
    { title: 'Женское', url: '/catalog/female' },
    { title: 'Бренды', url: '/brand' },
  ];
  const [selected, setSelected] = useState('');

  function activeClick(item) {
    setSelected(item);
  }

  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        {leftMenu.map((item) => (
          <MarketLink key={item.title} url={item.url}>
            {item.title}
          </MarketLink>
        ))}
      </div>
      <Link href="/">
        <a className={styles.logo}>
          <img src="../static/img/svg/logo.svg" alt="Logo" />
        </a>
      </Link>
      <div className={styles.rightSide}>
        <a className={styles.search} href="#">
          <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.2368 11.2746C15.5632 8.05397 14.7851 3.59438 11.5001 1.31418C8.21507 -0.966012 3.66627 -0.203768 1.34047 3.01738C-0.985335 6.23798 -0.207844 10.697 3.07774 12.9772C5.42244 14.6047 8.5224 14.73 10.9955 13.2981L16.369 18.5347C16.9492 19.1335 17.9145 19.1575 18.5253 18.5886C19.1361 18.0204 19.1605 17.0739 18.5809 16.4752C18.5625 16.4561 18.5448 16.4387 18.5253 16.4207L13.2368 11.2746ZM7.28419 11.7628C4.68829 11.7633 2.58368 9.70159 2.58201 7.1566C2.58145 4.61161 4.6844 2.54827 7.28086 2.54718C9.87342 2.54609 11.9769 4.60453 11.9819 7.14625C11.9864 9.69178 9.88454 11.7584 7.28753 11.7628C7.28642 11.7628 7.28586 11.7628 7.28419 11.7628Z"
              fill="#1A1A1A"
            />
          </svg>
        </a>
        <a className={styles.user} href="#">
          <svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg">
            <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0" />
            <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0" />
          </svg>
        </a>
        <a className={styles.cart} href="#">
          <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.8784 3.45932H3.66997L3.42904 0.775256C3.38963 0.336324 3.02177 0 2.58109 0H0.851351C0.381162 0 0 0.381162 0 0.851351C0 1.32154 0.381162 1.7027 0.851351 1.7027H1.80276C2.32269 7.49521 0.978932 -7.47628 2.78193 12.6117C2.85142 13.398 3.27624 14.2511 4.00808 14.8309C2.68861 16.5159 3.8942 19 6.04054 19C7.82197 19 9.07844 17.2233 8.46754 15.5405H13.1271C12.517 17.2211 13.7707 19 15.5541 19C16.9773 19 18.1352 17.8421 18.1352 16.4189C18.1352 14.9957 16.9773 13.8378 15.5541 13.8378H6.04629C5.39959 13.8378 4.83604 13.4477 4.59279 12.8792L18.1985 12.0796C18.5699 12.0578 18.8842 11.7972 18.9745 11.4362L20.7044 4.51715C20.8385 3.98063 20.4323 3.45932 19.8784 3.45932ZM6.04054 17.2973C5.55624 17.2973 5.16219 16.9032 5.16219 16.4189C5.16219 15.9346 5.55624 15.5405 6.04054 15.5405C6.52487 15.5405 6.91893 15.9346 6.91893 16.4189C6.91893 16.9032 6.52487 17.2973 6.04054 17.2973ZM15.5541 17.2973C15.0697 17.2973 14.6757 16.9032 14.6757 16.4189C14.6757 15.9346 15.0697 15.5405 15.5541 15.5405C16.0384 15.5405 16.4324 15.9346 16.4324 16.4189C16.4324 16.9032 16.0384 17.2973 15.5541 17.2973ZM17.4743 10.4165L4.36362 11.187L3.82281 5.16198H18.788L17.4743 10.4165Z"
              fill="#1A1A1A"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}