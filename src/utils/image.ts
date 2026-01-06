/**
 * Get image path with basePath for production
 * In development, returns the path as-is. In production, adds the basePath prefix.
 */
export const getImgPath = (path: string): string => {
  // Get basePath from environment variable (set at build time)
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // For client-side, also try to detect from window location as fallback
  if (typeof window !== "undefined" && !basePath) {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    // If URL has a first segment that looks like a repo name (contains .github.io)
    const firstSegment = pathSegments[0] || "";
    if (firstSegment.includes("github.io") || firstSegment.includes(".")) {
      basePath = `/${firstSegment}`;
    }
  }

  if (!basePath) {
    return path;
  }

  // Don't add basePath if path already includes it
  if (path.startsWith(basePath)) {
    return path;
  }

  // Ensure path starts with / before prepending basePath
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

/**
 * Get data file path with basePath for production
 * Used for fetching JSON data files
 */
export const getDataPath = (path: string): string => {
  if (typeof window !== "undefined") {
    const basePath = window.location.pathname.split("/")[1] || "";
    if (basePath && path.startsWith("/")) {
      return `/${basePath}${path}`;
    }
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};
