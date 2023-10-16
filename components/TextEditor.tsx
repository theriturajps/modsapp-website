import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic"; // Dynamic import for client-side rendering

type CallbackFunction = (value: string) => void;

interface TextEditorProps {
  callback: CallbackFunction;
}

const DynamicReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const TextEditor: React.FC<TextEditorProps> = ({ callback }) => {
  const [value, setValue] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["emoji", "formula", "clean", "fullscreen", "code", "code-block"],
    ],
  };

  return (
    isClient && (
      <div>
        <DynamicReactQuill
          theme="snow"
          value={value}
          onChange={(e) => {
            setValue(e);
            callback(e);
          }}
          modules={modules}
          placeholder="Write content here..."
          className="h-full w-full text-black text-md"
        />
      </div>
    )
  );
};

export default TextEditor;
