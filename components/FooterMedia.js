import React from "react";

function FooterMedia() {
  return (
    <div className="flex space-x-4 text-white text-sm">
      <div>
        <p className="hover:text-yellow-400 cursor-pointer active:scale-75">
          Facebook
        </p>
      </div>
      <div>
        <p className="hover:text-yellow-400 cursor-pointer active:scale-75">
          Twitter
        </p>
      </div>
    </div>
  );
}

export default FooterMedia;
