"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const ImageById = ({
  id,
  className,
  sizes,
  fill = false,
  priority = false,
  d = "low",
  p = "de",
  width = 300, // Default width
  height = 300, // Default height
}) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (id) {
      getImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getImage = async () => {
    try {
      const imageUrl = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${id}/i.jpg?p=${p}&d=${d}`; // Fixed the query string

      // Make a request to your custom API route
      const response = await axios.get(
        `/api/proxy-image?url=${encodeURIComponent(imageUrl)}`,
        {
          responseType: "arraybuffer", // Make sure to get the binary data
        }
      );

      // Convert the image data to a blob URL
      const blob = new Blob([response.data], { type: "image/jpeg" }); // Ensure correct MIME type
      setImageUrl(URL.createObjectURL(blob)); // Create a Blob URL and set it to state
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  if (!id) {
    return <h1>Image not found</h1>;
  }

  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Fetched Cricket Image"
          className={className}
          sizes={sizes}
          priority={priority}
          fill={fill}
          width={!fill ? width : undefined} // Provide width only if fill is false
          height={!fill ? height : undefined} // Provide height only if fill is false
        />
      ) : (
        <Skeleton className={className} />
      )}
    </>
  );
};

export default ImageById;
