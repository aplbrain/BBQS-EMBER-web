export interface Tab {
  name: string;
  route: string;
  external: boolean;
  dropdown?: Dropdown;
}

export interface Dropdown {
  show: boolean;
  children: Tab[];
}
