import create from 'zustand'

export interface ILang {
  lang: string
  toggleLang: () => void
}

const useLang = create<ILang>(set => ({
  lang: 'is',
  toggleLang: () => set(state => ({ lang: state.lang === 'is' ? 'en' : 'is' })),
}))

export { useLang }
