import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Dropdowninterface {
  subModuleName: string;
  dropdownLinks: Array<DropdownLinksInterface>;
}

interface DropdownLinksInterface {
  name: string;
  path: string;
}

interface LinksIterface {
  name?: string;
  path?: string;
  icon: IconProp;
  dropdownSubModule?: Array<Dropdowninterface>;
}

interface ModuleInterface {
  moduleName: string;
  views: Array<LinksIterface>;
}

export const sideMenu: Array<Array<ModuleInterface>> = [
  [
    {
      moduleName: "React",
      views: [
        {
          path: "",
          icon: ["fab", "react"],
          dropdownSubModule: [
            {
              subModuleName: "Hooks",
              dropdownLinks: [
                {
                  name: "UseState",
                  path: "use-state",
                },
                {
                  name: "useEffect",
                  path: "use-effect",
                },
                {
                  name: "useContext",
                  path: "use-context",
                },
                {
                  name: "useReducer",
                  path: "use-reducer",
                },
                {
                  name: "useCallback",
                  path: "use-callback",
                },
                {
                  name: "useMemo",
                  path: "use-memo",
                },
                {
                  name: "useRef",
                  path: "use-ref",
                },

                {
                  name: "useImperativeHandle",
                  path: "use-imperative-handle",
                },
                {
                  name: "use-layout-effect",
                  path: "use-reducer",
                },
                {
                  name: "useDebugValue",
                  path: "use-debug-value",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
];
