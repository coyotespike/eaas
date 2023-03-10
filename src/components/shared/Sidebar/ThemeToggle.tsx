import { useContext, useState, useEffect } from "react";
import { AppContext, Themes } from "state";

import { usePageState, usePageTheme } from "state";

const ThemeToggle = () => {
  const pageTheme = usePageTheme();

  const [enabled, setEnabled] = useState(true);
  return (
    <div>
      <div className="mx-4 space-x-4 py-16 ">
        <input
          type="checkbox"
          className="mx-2"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        {"hi there"}
      </div>
      <div className="py-16">
        <select
          className={`rounded px-4 py-2 text-white text-${pageTheme.bgColor}-700`}
          value={pageTheme.bgColor}
          onChange={() => null}
        >
          <option className="text-indigo-700" value={"indigo"}>
            indigo
          </option>
          <option className="text-orange-700" value={"orange"}>
            Orange
          </option>
          <option className="text-cyan-700" value={"cyan"}>
            Cyan
          </option>
          <option className="text-teal-700" value={"teal"}>
            Teal
          </option>
          <option className="text-sky-700" value={"lightBlue"}>
            Light Blue
          </option>
          <option className="text-violet-700" value={"violet"}>
            Violet
          </option>
          <option className="text-purple-700" value={"purple"}>
            purple
          </option>
          <option className="text-fuchsia-700" value={"fuchsia"}>
            Fuchsia
          </option>
          <option className="text-neutral-700" value={"neutral"}>
            trueGray
          </option>
          <option className="text-rose-700" value={"rose"}>
            rose
          </option>
          <option className="text-pink-700" value={"pink"}>
            pink
          </option>
          <option className="text-gray-700" value={"gray"}>
            Gray
          </option>
          <option className="text-white-700" value={"white"}>
            White
          </option>
          <option className="text-black-700" value={"black"}>
            Black
          </option>
        </select>
      </div>
    </div>
  );
};

export default ThemeToggle;