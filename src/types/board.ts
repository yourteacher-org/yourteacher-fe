interface CategoryType {
  category: string;
  subclass: string;
  data: {
    id: number;
    title: string;
    author: string;
    created_at: string;
    view_count: number;
    like_count: number;
  }[];
}

export type { CategoryType };
