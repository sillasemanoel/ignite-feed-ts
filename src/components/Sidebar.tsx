import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQF4UHzXuGhGlg/profile-displaybackgroundimage-shrink_350_1400/0/1716106869543?e=1729728000&v=beta&t=e5m2qj_zKxZ0p6-Hs9Y4QcEE0DXItxiwCaU5SZP2whY"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/sillasemanoel.png" />

        <strong>Sillas Emanoel</strong>
        <span>Full Stack Next.js Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
