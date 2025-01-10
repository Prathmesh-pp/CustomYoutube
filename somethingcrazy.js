document.getElementById('loadVideoBtn').addEventListener('click', () => {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoContainer = document.getElementById('videoContainer');
    const videoFrame = document.getElementById('videoFrame');
  
    // Extract video ID from URL
    const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/) ||
                         videoUrl.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  
    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
      videoContainer.classList.remove('hidden');
    } else {
      alert('Invalid YouTube URL. Please try again.');
    }
  });
  
  document.getElementById('closeVideoBtn').addEventListener('click', () => {
    const videoContainer = document.getElementById('videoContainer');
    const videoFrame = document.getElementById('videoFrame');
    
    videoFrame.src = ''; // Clear the video source
    videoContainer.classList.add('hidden'); // Hide the video container
  });
  