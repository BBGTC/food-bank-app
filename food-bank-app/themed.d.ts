import '@rneui/themed'

declare module '@rneui/themed' {
  export interface Colors {
    gray: {
      A: string,
      B: string,
      date: string,
    }
    green: string
    shadow: string
    buttonBorder: string
    red: string
  }
}
