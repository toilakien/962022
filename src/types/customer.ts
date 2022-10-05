export interface Column {
  id: "name" | "code" | "status" | "create_at" | "update_at";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string | React.ReactElement;
}
export interface Data {
  name: string;
  code: string;
  status: number;
  create_at: string;
  update_at: string;
}
