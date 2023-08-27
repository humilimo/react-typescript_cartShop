export const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
export const getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '{}')
}