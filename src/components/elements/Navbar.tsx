import { useEffect } from "react";
import { MainContainer } from "../shared/MainContainer";
import { SectionContainer } from "../shared/SectionContainer";
import { useThemeStore } from "../store/ThemeStore";

export const Navbar = () => {
  const { theme, toggleTheme, checkIsDefault } = useThemeStore();
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <MainContainer className="items-center">
      <SectionContainer className="text-center text-lg font-bold p-2">
        <div className="navbar navbar-center bg-base-400">
          <div className="flex flex-1 justify-between">
            <span className="text-base-content text-xl">
              BIM-Loc
            </span>
          </div>
          <div className="flex items-center gap-x-4 p-2">
            <input 
              type="checkbox" 
              checked={checkIsDefault(theme)}
              onChange={toggleTheme}
              className="toggle toggle-base-content toggle-md theme-controller"
            />
          </div>
        </div>
      </SectionContainer>
    </MainContainer>
  )
}

