import React, { useState } from "react";

const VideoModal = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  //   const dispatch = useAppDispatch();

  //   const handleCloseBtn = () => {
  //     dispatch(setModalVideoPlay(false));
  //     dispatch(setModalVideoLink(""));
  //   };

  //   const getEmbedLink = (url: string): string => {
  //     if (!url) return "";

  //     let videoId = "";

  //     try {
  //       if (url.includes("youtube.com/watch?v=")) {
  //         videoId = url.split("v=")[1]?.split("&")[0];
  //         return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  //       } else if (url.includes("youtu.be/")) {
  //         videoId = url.split("youtu.be/")[1]?.split("?")[0];
  //         return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  //       } else if (url.includes("youtube.com/embed/")) {
  //         return url;
  //       }

  //       if (url.includes("drive.google.com")) {
  //         if (url.includes("/file/d/")) {
  //           videoId = url.split("/file/d/")[1]?.split("/")[0];
  //         } else if (url.includes("id=")) {
  //           videoId = url.split("id=")[1]?.split("&")[0];
  //         }

  //         return videoId
  //           ? `https://drive.google.com/file/d/${videoId}/preview`
  //           : url;
  //       }

  //       return url;
  //     } catch (err) {
  //       console.error("Invalid video URL:", err);
  //       return url;
  //     }
  //   };
  //   const embedUrl = getEmbedLink(videoLink);

  return (
    videoModalOpen && (
      <div className="fixed inset-0 z-50! flex items-center justify-center bg-black/70 ">
        <button
          //   onClick={handleCloseBtn}
          onClick={() => setVideoModalOpen(false)}
          className="absolute top-0 right-0 border! border-black/40! text-white! bg-black/20! hover:bg-black/40! py-3! "
        >
          ✕
        </button>

        <div className=" w-[50%] 2xl:h-[70%] bg-amber-100 aspect-video  rounded-lg overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="100%"
            // src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay;  "
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  );
};

export default VideoModal;
