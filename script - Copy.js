function togglePlay(videoId) {
  const video = document.getElementById(videoId);
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleSize(videoId) {
  const videoCard = document.getElementById(videoId).closest('.video-card');
  
  // Toggle class to make the video full width
  videoCard.classList.toggle('fullwidth');

  // Scroll to the resized video for focus
  videoCard.scrollIntoView({ behavior: "smooth", block: "center" });
}
