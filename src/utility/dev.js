export const isDev = process.env.NODE_ENV !== 'production'

export const ifDev = func => (...args) => {
    if (isDev) return func(...args)
}

export const warn = ifDev(console.warn)
export const log = ifDev(console.log)
