export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

export interface TabItem {
  title: string;
  content: string;
}

export interface FullWidthTabsProps {
  items: Array<TabItem>;
}
