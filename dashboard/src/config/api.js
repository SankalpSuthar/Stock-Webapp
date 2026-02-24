const rawApiBaseUrl = process.env.REACT_APP_API_BASE_URL || "";

const normalizedApiBaseUrl = rawApiBaseUrl.replace(/\/+$/, "");

export const apiUrl = (path) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedApiBaseUrl}${normalizedPath}`;
};

