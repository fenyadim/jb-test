import Link from "next/link";

import { useRouter } from "next/router";

import styles from "../styles/components/header.module.scss";
import classnames from "classnames";

export default function MarketLink({ children, item, active, onClick, url }) {
  const router = useRouter();
  return (
    <Link href={url}>
      <a
        className={classnames(
          styles.leftSideLink,
          router.pathname === url ? styles.active : ""
        )}
      >
        {children}
      </a>
    </Link>
  );
}
