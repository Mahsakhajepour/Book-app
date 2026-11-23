import { useTheme } from "../context/ThemeContext.jsx";
import { MdDarkMode, MdLightMode, MdSettingsBrightness } from "react-icons/md";

import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      value: "light",
      label: "Light mode",
      icon: <MdLightMode />,
    },
    {
      value: "dark",
      label: "Dark mode",
      icon: <MdDarkMode />,
    },
    {
      value: "system",
      label: "System theme",
      icon: <MdSettingsBrightness />,
    },
  ];

  return (
    <div className={styles.themeToggle}>
      {themes.map((item) => (
        <button
          key={item.value}
          type="button"
          className={theme === item.value ? styles.active : ""}
          onClick={() => setTheme(item.value)}
          aria-label={item.label}
          aria-pressed={theme === item.value}
          title={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;
