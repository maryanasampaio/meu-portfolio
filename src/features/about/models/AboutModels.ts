export interface AboutPersonalInfo {
  name: string
  profileImage: string
}

export type HighlightPosition = 'start' | 'middle' | 'end'

export interface ParagraphHighlight {
  text: string
  position: HighlightPosition
}

export interface AboutParagraph {
  content: string
  highlight: ParagraphHighlight | null
}

export interface AboutSection {
  title: string
  description: string
}
