const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();
const db = admin.firestore();

const INSTAGRAM_USER_ID = "17841474954643722";
const APP_ID = "1311748590473367";
const APP_SECRET = "5d92fabfcba3a32effd9a1f921c48402";
const INITIAL_ACCESS_TOKEN = "EAASpB0TFEJcBPJ1rzhdZCZCZASkWbMOhdNYrw2JDQHZAAvYQEU0OZC5NttbyIdZAjpSOYnvtZAo393M9AA6gSmrMrYNCg1EtRFJZCXGtbTRczSlf05kbDvj4Ab5mrSYBaHMErN1HZCt4TAvgKZAU1imbcDGWHiytyV6vHfAgT1VsuWkqsuKhNwMkFwqy5X5wQTS0JDMmtdPoC22rahPeHoMttwBYhBzGrOrRfAcNZANy9F7QRagAAZDZD";

// Refresh token & store posts
exports.refreshInstagramToken = functions.pubsub.schedule("every 24 hours").onRun(async () => {
  try {
    // Refresh token
    const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${INITIAL_ACCESS_TOKEN}`;
    const refreshResponse = await fetch(refreshUrl);
    const refreshData = await refreshResponse.json();

    const newAccessToken = refreshData.access_token;

    // Save token in Firestore
    await db.collection("tokens").doc("instagram").set({ access_token: newAccessToken });

    // Fetch posts
    const postsUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${newAccessToken}`;
    const postsResponse = await fetch(postsUrl);
    const postsData = await postsResponse.json();

    // Save posts
    const batch = db.batch();
    postsData.data.forEach((post) => {
      const ref = db.collection("instagramPosts").doc(post.id);
      batch.set(ref, post);
    });
    await batch.commit();

    console.log("Token refreshed + posts updated");
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
});