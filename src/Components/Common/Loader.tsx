const Loader = () => {
  return (
    <div className="fixed! z-9999 left-0 top-0 right-0 h-screen flex justify-center items-center  bg-white/50">
      <svg
        className="pl"
        width="128px"
        height="128px"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="pl__ring2"
          cx="64"
          cy="64"
          r="52.5"
          fill="none"
          stroke="#1ab69d"
          stroke-width="12"
          transform="rotate(-90,64,64)"
          stroke-linecap="round"
          stroke-dasharray="329.9 329.9"
          stroke-dashoffset="-329.3"
        ></circle>

        <circle
          className="pl__ring4"
          cx="64"
          cy="64"
          r="37.5"
          fill="none"
          stroke="#1ab69d"
          stroke-width="9"
          transform="rotate(-90,64,64)"
          stroke-linecap="round"
          stroke-dasharray="254.5 254.5"
          stroke-dashoffset="-254"
        ></circle>

        <circle
          className="pl__ring6"
          cx="64"
          cy="64"
          r="22.5"
          fill="none"
          stroke="#1ab69d"
          stroke-width="9"
          transform="rotate(-90,64,64)"
          stroke-linecap="round"
          stroke-dasharray="204.2 204.2"
          stroke-dashoffset="-203.9"
        ></circle>
      </svg>
    </div>
  );
};

export default Loader;
