function VideoEmbed({ videoId, client, description }) {
  return (
    <div className="video-item">
      <div className="video-embed">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="video-caption">
        <div className="video-client">{client}</div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoEmbed
