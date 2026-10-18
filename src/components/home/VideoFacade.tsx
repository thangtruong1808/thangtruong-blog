// Purpose: Lightweight YouTube embed: shows a thumbnail and only loads the player on click.
// Author: Thang Truong
// Date: 2026-10-18
import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";

interface VideoFacadeProps {
  videoId: string;
  title: string;
}

const VideoFacade: React.FC<VideoFacadeProps> = ({ videoId, title }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-line bg-surface-2 shadow-soft">
      {playing ? (
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-stone-900 shadow-lift transition-transform duration-300 group-hover:scale-110">
            <FiPlay className="ml-1 h-6 w-6" aria-hidden="true" />
          </span>
          <span className="absolute bottom-4 left-4 text-left text-sm font-medium text-white">{title}</span>
        </button>
      )}
    </div>
  );
};

export default VideoFacade;
