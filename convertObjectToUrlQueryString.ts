function toQueryString(params: Record<string, string | number>): string {
    return Object.entries(params)
        .map(([key, value]) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
        })
        .join("&");
}