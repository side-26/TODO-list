export const useMeta = () => {
    const setTtile = (title: string) => {
        document.title = title
    }
    return [setTtile]
}