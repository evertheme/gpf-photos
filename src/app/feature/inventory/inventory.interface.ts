export interface Image {
  id?: string;
  newId?: string;
  oldId?: string;
  category: string;
  fileName: string;
  name?: string;
  price?: number;
  caption?: string;
  credit?: string;
  tags?: string[];
  archive: boolean;
}
