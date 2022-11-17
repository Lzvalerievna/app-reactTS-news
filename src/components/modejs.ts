export interface ContentListType {
    id: number,
    valueName: string,
    dates: {2013?: string, 2014?: string, 2015: string, 2016: string, 2017: string, 2018: string, 2019?:string, 2020?: string },
    active: boolean,
}

export type DateListType =  {
    dates:{ 
    2013?: string,
    2014?: string,
    2015: string,
    2016: string,
    2017: string,
    2018: string,
    2019?: string,
    2020?: string
    }
}

export type ButtonsListType ={
    id: number,
    name: string,
    cor: number
}

export interface PropsTypeNav {
    filterName: string,
    corner: number,
    buttonOnClick:  (id: number, filterName: string, cor: number, refButton: React.MutableRefObject<HTMLButtonElement | null> ) => void,
    buttonActive: number,
    onChangePrev: (buttons: ButtonsListType[], buttonActive: number) => void,
    onChangeNext: (buttons: ButtonsListType[], buttonActive: number) => void
}

export interface PropsTypeBtn {
    cor: number,
    corner: number, 
    x: number,
    y: number,
    id: number,
    name: string,
    classActive: string,
    buttonOnClick: (id: number, filterName: string, cor: number,refButton: React.MutableRefObject<HTMLButtonElement | null>) => void
}

export interface TypeListEvents {
    filteredEvents: any,
}
  