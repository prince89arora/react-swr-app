export const fetcher = async (url: string) => {
    const res = await fetch(`http://localhost:3001${url}`);
    return res.json();
};