export interface QuestionItem {
    question: string;
    content: string;
  }
  
  export interface CategoryData {
    [key: string]: QuestionItem[];
  }