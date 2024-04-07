export enum ArticleType {
  IT = 'IT',
  CHEMISTRY = 'CHEMISTRY',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  title: string;
  paragraphs: string[];
  type: ArticleBlockType.TEXT;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  code: string;
  type: ArticleBlockType.CODE;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  title: string;
  src: string;
  type: ArticleBlockType.IMAGE;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock;

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  img?: string;
  views?: number;
  createdAt?: string;
  type?: ArticleType[];
  blocks?: ArticleBlock[];
}
