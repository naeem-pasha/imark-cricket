import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function timeAgo(timestamp) {
  const now = Date.now(); // Current time in milliseconds
  const diffInMs = now - timestamp; // Difference in milliseconds
  const diffInSeconds = diffInMs / 1000; // Convert to seconds

  if (diffInSeconds < 60) {
    return `${Math.floor(diffInSeconds)} seconds ago`;
  }

  const diffInMinutes = diffInSeconds / 60; // Convert to minutes
  if (diffInMinutes < 60) {
    return `${Math.floor(diffInMinutes)} minutes ago`;
  }

  const diffInHours = diffInMinutes / 60; // Convert to hours
  if (diffInHours < 24) {
    return `${diffInHours.toFixed(1)} hours ago`;
  }

  const diffInDays = diffInHours / 24; // Convert to days
  if (diffInDays < 7) {
    return `${Math.floor(diffInDays)} days ago`;
  }

  const diffInWeeks = diffInDays / 7; // Convert to weeks
  if (diffInWeeks < 4) {
    return `${Math.floor(diffInWeeks)} weeks ago`;
  }

  const diffInMonths = diffInDays / 30; // Approximate months
  if (diffInMonths < 12) {
    return `${Math.floor(diffInMonths)} months ago`;
  }

  const diffInYears = diffInDays / 365; // Approximate years
  return `${Math.floor(diffInYears)} years ago`;
}

export const converIntoArr = (obj) => {
  if (!obj) return [];
  const arr = Object.values(obj).filter(
    (val) => val && Object.keys(val).length > 0
  );
  return arr;
};

export function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Arrays for day and month names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = dayNames[date.getDay()]; // Day of the week
  const day = date.getDate().toString().padStart(2, "0"); // Day of the month with leading zero
  const monthName = monthNames[date.getMonth()]; // Full month name
  const year = date.getFullYear(); // Year

  // Combine components into desired format
  return `${dayName}, ${monthName} ${day}, ${year}`;
}

export function formatTime(timestamp) {
  const date = new Date(timestamp);

  // Extract hours, minutes, and seconds
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format

  // Combine into desired format
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}
