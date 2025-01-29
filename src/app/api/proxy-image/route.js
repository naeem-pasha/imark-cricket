import axios from "axios";

// Simple in-memory cache
const cache = new Map();

async function fetchImage(imageUrl, p, d) {
  try {
    // Make the API call to fetch the image
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY_CRICBUZZ}`, // Replace with your actual API key
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
      params: { p, d }, // Pass additional query parameters
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error("Access denied: Check your API key or permissions.");
      throw new Error("Access denied");
    }
    console.error("Failed to fetch image:", error);
    throw error;
  }
}

export async function GET(req) {
  const url = new URL(req.url);
  const imageUrl = url.searchParams.get("url");
  const p = url.searchParams.get("p"); // Extract 'p' query parameter
  const d = url.searchParams.get("d"); // Extract 'd' query parameter

  if (!imageUrl) {
    return new Response(
      JSON.stringify({ error: "URL parameter is required" }),
      { status: 400 }
    );
  }

  // Generate a cache key using the URL and parameters
  const cacheKey = `${imageUrl}?p=${p}&d=${d}`;

  // Check if the response is in the cache
  if (cache.has(cacheKey)) {
    console.log("Cache hit for:", cacheKey);
    return new Response(cache.get(cacheKey), {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=3600", // Inform browsers to cache this
      },
    });
  }

  try {
    // Fetch the image data
    const imageData = await fetchImage(imageUrl, p, d);

    // Store the data in the cache
    cache.set(cacheKey, imageData);

    return new Response(imageData, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg", // Set appropriate content type
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch image" }), {
      status: 500,
    });
  }
}
