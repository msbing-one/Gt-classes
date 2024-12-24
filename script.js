function toggleLectures(lectureId) {
  const lectures = document.getElementById(lectureId);
  lectures.style.display = (lectures.style.display === "block") ? "none" : "block";
}

function openVideo(title, videoUrl, notesPdf, dppPdf) {
  // Hide main content and show video page
  document.querySelector('.main-content').style.display = 'none';
  document.getElementById('videoPage').style.display = 'block';

  // Set the video title dynamically
  document.getElementById('videoTitle').innerText = title;

  // Set video source and load the video
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSource = document.getElementById('videoSource');
  videoSource.src = videoUrl;
  videoPlayer.load();

  // Set Notes and DPP PDF links
  document.getElementById('notesLink').href = notesPdf;
  document.getElementById('dppLink').href = dppPdf;
}

function goBack() {
  // Go back to main content
  document.querySelector('.main-content').style.display = 'block';
  document.getElementById('videoPage').style.display = 'none';
}
